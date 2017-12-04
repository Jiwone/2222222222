package com.prj.web.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Imgview;
import com.prj.web.entity.Info;

public interface InfoDao {
	List<Info> getList(@Param("page") int page);

	Info getInfo(String id);

	Info getInfoPrev(String id);

	Info getInfoNext(String id);

	int update(String id, Info info);
	int updateHit(String id);
	
	int delete(String id);

	int insert(String title, String content, String writerId);

	int insert(Info info);

	int getNextId();

	int getInfoCount();

	List<Imgview> getId();
	
	String getImgsrc(String id);

	String getTitle2(String id);

	int update2(String id, String content, String title);
}
