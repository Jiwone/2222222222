package com.prj.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Free;
import com.prj.web.entity.Tip;

public interface FreeDao {
	List<Free> getList(@Param("page") int page,@Param("query") String query);
	Free getFree(String id);
	Free getFreePrev(String id);
	Free getFreeNext(String id);
	int update(String id, Free free);
	int updateHit(String id);
	int getNextId();
	int insert(String title, String content, String writerId);
	int insert(Free free);
	int delete(String id);
	int getFreeCount();

}
