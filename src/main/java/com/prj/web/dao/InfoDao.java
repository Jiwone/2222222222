package com.prj.web.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Drama;
import com.prj.web.entity.Imgview;
import com.prj.web.entity.Info;
import com.prj.web.entity.Tip;

public interface InfoDao {
	List<Info> getList(@Param("page") int page);

	List<Tip> getTipList(int page);


	
	Info getInfo(String id);

	Info getInfoPrev(String id);

	Info getInfoNext(String id);

	int update(String id, Info info);
	int updateHit(String id);
	
	int delete(String id);
	
	/*insert부분*/
	int insert(String title, String content, String writerId);
	
	int tipInsert(String title, String content, String writerId);

	int dramaInsert(String title, String content, String writerId);

	int insert(Info info);

	int tipInsert(Tip tip);

	int dramaInsert(Drama drama);
	/*
	insert부분 끝*/
	int getNextId();
	
	int getDramaNextId();

	int getTipNextId();


	int getInfoCount();

	List<Imgview> getId();
	
	String getImgsrc(String id);

	String getTitle2(String id);

	int update2(String id, String content, String title);





}
