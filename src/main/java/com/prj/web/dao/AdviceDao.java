package com.prj.web.dao;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Advice;

public interface AdviceDao {
	List<Advice> getList(@Param("page") int page,@Param("query") String query);
	Advice getAdvice(String id);
	Advice getAdvicePrev(String id);
	Advice getAdviceNext(String id);
	int getAdviceCount();
	int update(String id, Advice advice);
	int updateHit(String id);
	int insert(String title, String content, String writerId);
	int insert(Advice advice);
	int getNextId();
	int delete(String id);
	List<Advice> getPrevAdviceList(String id, Date date);
}
