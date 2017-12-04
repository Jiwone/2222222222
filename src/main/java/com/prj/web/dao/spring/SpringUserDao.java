package com.prj.web.dao.spring;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.AdviceDao;
import com.prj.web.dao.UserDao;
import com.prj.web.entity.Advice;
import com.prj.web.entity.Info;
import com.prj.web.entity.User;

public class SpringUserDao implements UserDao {

	@Autowired
	private JdbcTemplate template;

	@Override
	public List<User> getList(int page, String query) {
		String sql = "select * from User order by id DESC limit ?,10";

		List<User> list = template.query(sql, new Object[] { (page - 1) * 10 },
				BeanPropertyRowMapper.newInstance(User.class));

		return list;
	}

	@Override
	public int getUserCount() {
		String sql = "SELECT COUNT(id) as count FROM User";
		
		int count = template.queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public int delete(String id) {
		String sql = "delete from User where id = ?";
		String adviceSql = "delete from Advice where writer_id = ?";
		String votingSql = "delete from Voting where writer_id = ?";
		String freeSql = "delete from Free where writerId = ?";
		String infoSql = "delete from Info where writerId = ?";
		String tipSql = "delete from Tip where writerId = ?";
		
		int del = template.update(sql, id);
		template.update(adviceSql, id);
		template.update(votingSql, id);
		template.update(freeSql, id);
		template.update(infoSql, id);
		template.update(tipSql, id);
		
		return del;
	}

	@Override
	public User getUser(String id) {
		String sql = "select * from User where id = ?";

		User user = template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(User.class));
		return user;
	}

	@Override
	public int update(String id, User user) {
		String sql = "update User set pw = ?, nickname = ?, weight = ?, height = ?, phone = ? where id = ?;";

		int result = template.update(sql, user.getPw(), user.getNickName(), user.getWeight(), user.getHeight(), user.getPhone(), id);
		
		return result;
	}

}
