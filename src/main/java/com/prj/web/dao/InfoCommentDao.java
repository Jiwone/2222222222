package com.prj.web.dao;

import java.util.List;

import com.prj.web.entity.Comment;

public interface InfoCommentDao {
		int insert(String content,String freeId ,String writerId);
		int delete(String id);
		List<Comment> getCommentList(String freeId);
		List<Comment> getUpdateCommentList(String freeId, String cId);

}
