package com.prj.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.prj.web.entity.Voting;

public interface VotingDao {
	List<Voting> getList(@Param("page") int page,@Param("query") String query);
	Voting getVoting(String id);
	Voting getVotingPrev(String id);
	Voting getVotingNext(String id);
	int getVotingCount();
	int update(String id, Voting voting);
	int updateHit(String id);
	int insert(String title, String content, String writerId);
	int insert(Voting voting);
	int getNextId();
	int delete(String id);
	List<String> getImgs(String id);
}
