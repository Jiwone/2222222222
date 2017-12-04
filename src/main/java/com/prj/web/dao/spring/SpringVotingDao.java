package com.prj.web.dao.spring;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.VotingDao;
import com.prj.web.entity.Voting;

public class SpringVotingDao implements VotingDao {

	@Autowired
	private JdbcTemplate template;

	@Override
	public List<Voting> getList(int page, String query) {
		String sql = "select * from Voting where title like ? order by date DESC limit ?,10";

		List<Voting> list = template.query(sql, new Object[] { "%" + query + "%", (page - 1) * 10 },
				BeanPropertyRowMapper.newInstance(Voting.class));
		return list;
	}

	@Override
	public Voting getVoting(String id) {
		String sql = "select * from Voting where id = ?";

		Voting voting = template.queryForObject(sql, new Object[] { id },
				BeanPropertyRowMapper.newInstance(Voting.class));
		return voting;
	}

	public List<String> getImgs(String id) {

		List<String> list = new ArrayList<String>();
		
		// 그럼 여기서 그 id랑 content랑 같이 list에 저장.
		String sql = "select content from Voting where id = ?";
		System.out.println("dao : ");
		String next = template.queryForObject(sql, new Object[] { id }, String.class);
		// content만 가꼬와서
		Pattern nonValidPattern = Pattern.compile("<img[^>]*src=[\\\"']?([^>\\\"']+)[\\\"']?[^>]*>");
		int imgCnt = 0;
		String content = "";
		Matcher matcher = nonValidPattern.matcher(next);
		while (matcher.find()) {
			content = matcher.group(1);
			imgCnt++;
			/*if (imgCnt == 1) {
				break;
			}*/
			list.add(content);
		}
		return list;
	}

	@Override
	public Voting getVotingPrev(String id) {
		String sql = "select * from Voting where id < CAST(? as UNSIGNED) order by date DESC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Voting.class));
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	@Override
	public Voting getVotingNext(String id) {
		String sql = "select * from Voting where id > CAST(? as UNSIGNED) order by date ASC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Voting.class));
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	@Override
	public int getVotingCount() {
		String sql = "SELECT COUNT(id) as count FROM Voting";

		int count = template.queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public int update(String id, Voting voting) {
		String sql = "update Voting set title = ?, content = ? where id = ?;";

		int result = template.update(sql, voting.getTitle(), voting.getContent(), id);

		return result;
	}

	@Override
	public int updateHit(String id) {
		String sql = "update Voting set hit = ifnull(hit,0)+1 where id = ?;";

		return template.update(sql, id);
	}

	@Override
	public int insert(String title, String content, String writerId) {
		return insert(new Voting(title, content, writerId));
	}

	@Override
	public int insert(Voting voting) {

		String sql = "insert into Voting(id, title, content, writer_id, hit) values(?, ?, ?, ?, 0);";

		int insert = template.update(sql, getNextId(), voting.getTitle(), voting.getContent(), voting.getWriterId());

		return insert;
	}

	@Override
	public int getNextId() {
		String sql = "select ifnull(MAX(CAST(id as unsigned)),0)+1 from Voting";

		int nextId = template.queryForObject(sql, Integer.class);

		return nextId;
	}

	@Override
	public int delete(String id) {
		String sql = "delete from Voting where id = ?";

		int del = template.update(sql, id);

		return del;
	}

}
