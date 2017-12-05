package com.prj.web.service.admin;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.prj.web.dao.TipDao;
import com.prj.web.dao.AdviceDao;
import com.prj.web.dao.FreeDao;
import com.prj.web.dao.InfoCommentDao;
import com.prj.web.dao.InfoDao;
import com.prj.web.dao.VotingDao;
import com.prj.web.entity.Voting;
import com.prj.web.entity.Advice;
import com.prj.web.entity.Comment;
import com.prj.web.entity.Free;
import com.prj.web.entity.Imgview;
import com.prj.web.entity.Info;
import com.prj.web.entity.Tip;

public class BoardService {
	
	@Autowired
	private FreeDao freeDao;
	
	@Autowired
	private TipDao TipDao;
	
	@Autowired
	private InfoDao InfoDao;
	
	@Autowired
	private VotingDao VotingDao;
	
	@Autowired
	private AdviceDao AdviceDao;
	@Autowired
	private InfoCommentDao InfoCommentDao;
	
	/*--------------------------------- 자유 게시판 ---------------------------------*/
	
	public List<Free> getFreeList(int page, String query){
		return freeDao.getList(page, query);
	}

	public Free getFree(String id) {
		return freeDao.getFree(id);
	}
	
	public int getFreeCount() {
		return freeDao.getFreeCount();
	}

	public Free getFreePrev(String id) {
		return freeDao.getFreePrev(id);
	}

	public Free getFreeNext(String id) {
		return freeDao.getFreeNext(id);
	}

	public int freeUpdate(String id, Free free) {
		return freeDao.update(id, free);
	}

	public int getFreeNextId() {
		return freeDao.getNextId();
	}

	public int freeInsert(String title, String content, String writerId) {
		return freeDao.insert(title, content, writerId);
	}

	public int freeDel(String id) {
		return freeDao.delete(id);
	}
	
	public int updateFreeHit(String id) {
		return freeDao.updateHit(id);
	}
	
	/*--------------------------------- Tip 게시판 ---------------------------------*/

	public List<Tip> getTipList(int page, String query) {
		return TipDao.getList(page, query);
	}

	public Tip getTip(String id) {
		return TipDao.getTip(id);
	}

	public Tip getTipPrev(String id) {
		return TipDao.getTipPrev(id);
	}

	public Tip getTipNext(String id) {
		return TipDao.getTipNext(id);
	}

	public int getTipCount() {
		return TipDao.getTipCount();
	}
	
	public int tipUpdate(String id, Tip tip) {
		return TipDao.update(id, tip);
	}

	public int tipInsert(String title, String content, String writerId) {
		return TipDao.insert(title, content, writerId);
	}

	public int getTipNextId() {
		return TipDao.getNextId();
	}

	public int tipDel(String id) {
		return TipDao.delete(id);
	}

	public int updateTipHit(String id) {
		return TipDao.updateHit(id);
	}
	
	/*--------------------------------- Info 게시판 ---------------------------------*/

	public List<Info> getInfoList(int page) {
		return InfoDao.getList(page);
	}

	public Info getInfo(String id) {
		return InfoDao.getInfo(id);
	}

	public Info getInfoPrev(String id) {
		return InfoDao.getInfoPrev(id);
	}

	public Info getInfoNext(String id) {
		return InfoDao.getInfoNext(id);
	}
	public List<Imgview> getId() {
		
		return InfoDao.getId();
	}

	
	public int infoUpdate(String id, Info info) {
		return InfoDao.update(id, info);
	}

	public int infoDel(String id) {
		return InfoDao.delete(id);
	}

	public int infoInsert(String title, String content, String writerId) {
		return InfoDao.insert(title, content, writerId);
	}

	public int infoTipInsert(String title, String content, String writerId) {
		
		return InfoDao.tipInsert(title, content, writerId);
	}
	
	public int infoDramaInsert(String title, String content, String writerId) {
		
		return InfoDao.dramaInsert(title, content, writerId);
	}

	
	public int getInfoNextId() {
		return InfoDao.getNextId();
	}

	public int getInfoCount() {
		return InfoDao.getInfoCount();
	}
	
	public int updateInfoHit(String id) {
		return InfoDao.updateHit(id);	
	}

	/*--------------------------------- Voting 게시판 ---------------------------------*/

	public List<Voting> getVotingList(int page, String query) {
		return VotingDao.getList(page, query);
	}

	public Voting getVoting(String id) {
		return VotingDao.getVoting(id);
	}

	public Voting getVotingPrev(String id) {
		return VotingDao.getVotingPrev(id);
	}

	public Voting getVotingNext(String id) {
		return VotingDao.getVotingNext(id);
	}

	public int getVotingCount() {
		return VotingDao.getVotingCount();
	}
	
	public int votingUpdate(String id, Voting voting) {
		return VotingDao.update(id, voting);
	}

	public int votingInsert(String title, String content, String writerId) {
		return VotingDao.insert(title, content, writerId);
	}

	public int getVotingNextId() {
		return VotingDao.getNextId();
	}

	public int votingDel(String id) {
		return VotingDao.delete(id);
	}
	
	public int updateVotingHit(String id) {
		return VotingDao.updateHit(id);	
	}
	
	public List<String> getVotingImgs(String id) {
		return VotingDao.getImgs(id);	
	}
	
	/*--------------------------------- Advice 게시판 ---------------------------------*/

	public List<Advice> getAdviceList(int page, String query) {
		return AdviceDao.getList(page, query);
	}

	public Advice getAdvice(String id) {
		return AdviceDao.getAdvice(id);
	}

	public Advice getAdvicePrev(String id) {
		return AdviceDao.getAdvicePrev(id);
	}

	public Advice getAdviceNext(String id) {
		return AdviceDao.getAdviceNext(id);
	}

	public int getAdviceCount() {
		return AdviceDao.getAdviceCount();
	}
	
	public int adviceUpdate(String id, Advice advice) {
		return AdviceDao.update(id, advice);
	}

	public int adviceInsert(String title, String content, String writerId) {
		return AdviceDao.insert(title, content, writerId);
	}

	public int getAdviceNextId() {
		return AdviceDao.getNextId();
	}

	public int adviceDel(String id) {
		return AdviceDao.delete(id);
	}

	public int updateAdviceHit(String id) {
		return AdviceDao.updateHit(id);
	}

	public List<Advice> getPrevAdviceList(String id, Date date) {
		return AdviceDao.getPrevAdviceList(id, date);
	}


	public int InfocommentInsert(String content,String freeId ,String writerId) {
		return InfoCommentDao.insert(content, freeId, writerId);
	}
	
	public int InfocommentDel(String id) {
		return InfoCommentDao.delete(id);
	}

	public List<Comment> getInfoCommentList(String freeId) {
		return InfoCommentDao.getCommentList(freeId);
	} 
	
	public List<Comment> getInfoUpdateCommentList(String freeId, String cId) {
		return InfoCommentDao.getUpdateCommentList(freeId,cId);
	}

	





}
