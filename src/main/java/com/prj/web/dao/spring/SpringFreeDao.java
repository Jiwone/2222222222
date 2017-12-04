package com.prj.web.dao.spring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.FreeDao;
import com.prj.web.entity.Free;

public class SpringFreeDao implements FreeDao {

	@Autowired
	private JdbcTemplate template;

	@Override
	public List<Free> getList(int page, String query) {
		String sql = "select * from Free where title like ? order by date DESC limit ?,10";

		List<Free> list = template.query(sql, new Object[] { "%"+query+"%", (page - 1) * 10 },
				BeanPropertyRowMapper.newInstance(Free.class));

		return list;
	}

	@Override
	public Free getFree(String id) {
		String sql = "select * from Free where id = ?";

		Free free = template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Free.class));
		return free;
	}

	@Override
	public Free getFreePrev(String id) {
		String sql = "select * from Free where id < CAST(? as UNSIGNED) order by date DESC limit 1";
		
		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Free.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}

	@Override
	public Free getFreeNext(String id) {
		String sql = "select * from Free where id > CAST(? as UNSIGNED) order by date ASC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Free.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}

	@Override
	public int getFreeCount() {
		String sql = "SELECT COUNT(id) as count FROM Free";
		
		int count = template.queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public int update(String id, Free free) {
		String sql = "update Free set title = ?, content = ? where id = ?;";

		int result = template.update(sql, free.getTitle(), free.getContent(), id);
		
		return result;
	}
	
	@Override
	public int updateHit(String id) {
		String sql = "update Free set hit = ifnull(hit,0)+1 where id = ?;";
		
		return template.update(sql, id);
	}

	@Override
	public int getNextId() {
		String sql = "select ifnull(MAX(CAST(id as unsigned)),0)+1 from Free";
		
		int nextId = template.queryForObject(sql, Integer.class);
		System.out.println(nextId);
		
		return nextId;
	}

	@Override
	public int insert(String title, String content, String writerId) {
		return insert(new Free(title, content, writerId));
	}

	@Override
	public int insert(Free free) {
		String sql = "insert into Free(id, title, content, writerId, hit) values(?, ?, ?, ?, 0);";
		
		int insert = template.update(sql, 
						getNextId(), 
						free.getTitle(), 
						free.getContent(), 
						free.getWriterId());		
				
		return insert;
	}

	@Override
	public int delete(String id) {
		String sql = "delete from Free where id = ?";
		
		int del = template.update(sql, id);
		
		return del;
	}

}
