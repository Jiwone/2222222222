package com.prj.web.dao.spring;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.InfoCommentDao;
import com.prj.web.entity.Comment;


public class SpringInfoCommentDao implements InfoCommentDao{
	@Autowired
	private JdbcTemplate template;

	@Override
	public int insert(String content, String infoId, String writerId) {
		String sql = "insert into InfoComment(content,infoId,writerId) values(?,?,?)";
		int result = template.update(sql,content,infoId,writerId);
		
		return result;
	}

	@Override
	public int delete(String id) {
		String sql = "delete from Info where id = ?";		
		int result = template.update(sql, id);		
		return result;
	}
	@Override
	public List<Comment> getCommentList(String infoId) {
		String sql = "select * from InfoComment where infoId = ? order by id asc";
		List<Comment> list = template.query(sql, new Object[] {infoId},
				BeanPropertyRowMapper.newInstance(Comment.class));
		return list;
	}

	@Override
	public List<Comment> getUpdateCommentList(String InfoId, String cId) {
		String sql = "select * from InfoComment where infoId = ? and id > ? order by id asc";
		List<Comment> list = template.query(sql, new Object[] {InfoId,cId},
				BeanPropertyRowMapper.newInstance(Comment.class));
		return list;
	}
	
}
