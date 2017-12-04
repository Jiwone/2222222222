package com.prj.web.dao;

import java.util.List;

import com.prj.web.entity.Advice;
import com.prj.web.entity.User;

public interface UserDao {

	List<User> getList(int page, String query);

	int getUserCount();

	int delete(String id);

	User getUser(String id);

	int update(String id, User user);

}
