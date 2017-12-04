package com.prj.web.dao.spring;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.AdviceDao;
import com.prj.web.entity.Advice;

public class SpringAdviceDao implements AdviceDao {

	@Autowired
	private JdbcTemplate template;

	@Override
	public List<Advice> getList(int page, String query) {
		String sql = "select * from Advice where title like ? order by date DESC limit ?,10";

		List<Advice> list = template.query(sql, new Object[] { "%"+query+"%", (page - 1) * 10 },
				BeanPropertyRowMapper.newInstance(Advice.class));

		return list;
	}

	@Override
	public Advice getAdvice(String id) {
		String sql = "select * from Advice where id = ?";

		Advice advice = template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Advice.class));
		return advice;
	}

	@Override
	public Advice getAdvicePrev(String id) {
		String sql = "select * from Advice where id < CAST(? as UNSIGNED) order by date DESC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Advice.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}

	@Override
	public Advice getAdviceNext(String id) {
		String sql = "select * from Advice where id > CAST(? as UNSIGNED) order by date ASC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Advice.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}

	@Override
	public int getAdviceCount() {
		String sql = "SELECT COUNT(id) as count FROM Advice";
		
		int count = template.queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public int update(String id, Advice advice) {
		String sql = "update Advice set title = ?, content = ? where id = ?;";

		int result = template.update(sql, advice.getTitle(), advice.getContent(), id);
		
		return result;
	}

	@Override
	public int updateHit(String id) {
		String sql = "update Advice set hit = ifnull(hit,0)+1 where id = ?;";
		
		return template.update(sql, id);
	}

	@Override
	public int insert(String title, String content, String writerId) {
		return insert(new Advice(title, content, writerId));
	}

	@Override
	public int insert(Advice advice) {

		String sql = "insert into Advice(id, title, content, writer_id, hit) values(?, ?, ?, ?, 0);";
		
		int insert = template.update(sql, 
						getNextId(), 
						advice.getTitle(), 
						advice.getContent(), 
						advice.getWriterId());		
				
		return insert;
	}

	@Override
	public int getNextId() {
		String sql = "select ifnull(MAX(CAST(id as unsigned)),0)+1 from Advice";
		
		int nextId = template.queryForObject(sql, Integer.class);
		
		return nextId;
	}

	@Override
	public int delete(String id) {
		String sql = "delete from Advice where id = ?";
		
		int del = template.update(sql, id);
		
		return del;
	}

	@Override
	public List<Advice> getPrevAdviceList(String id, Date date) {
		String sql = "select * from Advice where writer_id = ? and date < ? order by date desc limit 3;";

		try {
			return template.query(sql, new Object[] { id, date },
				BeanPropertyRowMapper.newInstance(Advice.class));
		}catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
}
