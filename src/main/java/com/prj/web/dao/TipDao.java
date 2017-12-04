package com.prj.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Tip;

public interface TipDao {
	List<Tip> getList(@Param("page") int page,@Param("query") String query);
	Tip getTip(String id);
	Tip getTipPrev(String id);
	Tip getTipNext(String id);
	int getTipCount();
	int update(String id, Tip tip);
	int updateHit(String id);
	int insert(String title, String content, String writerId);
	int insert(Tip tip);
	int getNextId();
	int delete(String id);
}
