package com.prj.web.controller.admin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.prj.web.entity.Advice;
import com.prj.web.entity.Comment;
import com.prj.web.entity.Free;
import com.prj.web.entity.Imgview;
import com.prj.web.entity.Info;
import com.prj.web.entity.Tip;
import com.prj.web.entity.Voting;
import com.prj.web.service.admin.BoardService;

@Controller
@RequestMapping("/admin/board/*")
public class BoardController {

	@Autowired
	private BoardService service;
	
	/*-------------- 자유 게시판 --------------*/
	
	@RequestMapping("free")
	public String free(@RequestParam(value = "p", defaultValue = "1") int page, @RequestParam(value = "q", defaultValue = "") String query, Model model) {
		List<Free> list = service.getFreeList(page, query);
		int count = service.getFreeCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.board.free.list";
	}
	
	@RequestMapping("free/{id}")
	public String freeDetail(@PathVariable("id") String id, Model model) {

		service.updateFreeHit(id);
		model.addAttribute("f", service.getFree(id));
		model.addAttribute("prev", service.getFreePrev(id));
		model.addAttribute("next", service.getFreeNext(id));

		return "admin.board.free.detail";
	}
	
	@RequestMapping(value = "free/{id}/edit", method = RequestMethod.GET)
	public String freeUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("f", service.getFree(id));
		
		return "admin.board.free.edit";
	}
	
	@RequestMapping(value = "free/{id}/edit", method = RequestMethod.POST)
	public String freeUpdate(@PathVariable("id") String id, Free free) {
		
		int update = service.freeUpdate(id, free);
		
		return "redirect:../../free/{id}";
	}
	
	@RequestMapping(value = "free/reg", method = RequestMethod.GET)
	public String freeReg() {
		return "admin.board.free.reg";
	}

	@RequestMapping(value = "free/reg", method = RequestMethod.POST)
	public String freeReg(Free free, MultipartFile file, HttpServletRequest request, Principal principal) throws IOException {

		int nextId = service.getFreeNextId();
		String writerId = principal.getName();
		System.out.println(writerId);
		
		service.freeInsert(free.getTitle(), free.getContent(), writerId);

		return "redirect:../free";
	}
	
	@RequestMapping("free/{id}/del")
	public String freeDel(@PathVariable("id") String id) {
		
		service.freeDel(id);
		
		return "redirect:../../free";
	}
	
	/*-------------- Tip 게시판 --------------*/
	
	@RequestMapping("tip")
	public String tip(@RequestParam(value = "p", defaultValue = "1") int page, @RequestParam(value = "q", defaultValue = "") String query, Model model) {
		List<Tip> list = service.getTipList(page, query);
		int count = service.getTipCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.board.tip.list";
	}
	
	@RequestMapping("tip/{id}")
	public String tipDetail(@PathVariable("id") String id, Model model) {
		
		Tip prev = service.getTipPrev(id);
		Tip next = service.getTipNext(id);
		service.updateTipHit(id);

		model.addAttribute("t", service.getTip(id));
		model.addAttribute("prev", prev);
		model.addAttribute("next", next);

		return "admin.board.tip.detail";
	}
	
	@RequestMapping(value = "tip/{id}/edit", method = RequestMethod.GET)
	public String tipUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("t", service.getTip(id));
		
		return "admin.board.tip.edit";
	}
	
	@RequestMapping(value = "tip/{id}/edit", method = RequestMethod.POST)
	public String tipUpdate(@PathVariable("id") String id, Tip tip) {
		
		int update = service.tipUpdate(id, tip);
		
		return "redirect:../../tip/{id}";
	}
	
	@RequestMapping(value = "tip/reg", method = RequestMethod.GET)
	public String tipReg() {
		return "admin.board.tip.reg";
	}

	@RequestMapping(value = "tip/reg", method = RequestMethod.POST)
	public String tipReg(Tip tip, MultipartFile file, HttpServletRequest request, Principal principal) throws IOException {

		int nextId = service.getTipNextId();
		String writerId = principal.getName();
		System.out.println(writerId);
/*
		Calendar cal = Calendar.getInstance();
		int year = cal.get(Calendar.YEAR);

		ServletContext ctx = request.getServletContext();
		String path = ctx.getRealPath(String.format("/resource/customer/notice/%s/%s", year, nextId));

		System.out.println(path);

		File f = new File(path);
		if (!f.exists()) {
			if (!f.mkdirs())
				System.out.println("년도 디렉토리 생성 불가");
		}

		path += File.separator + file.getOriginalFilename();
		File f2 = new File(path);

		InputStream fis = file.getInputStream();
		OutputStream fos = new FileOutputStream(f2);

		byte[] buf = new byte[1024];

		int size = 0;
		while ((size = fis.read(buf)) > 0)
			fos.write(buf, 0, size);

		fos.close();
		fis.close();

		String fileName = file.getOriginalFilename();*/

		service.tipInsert(tip.getTitle(), tip.getContent(), writerId);

		return "redirect:../tip";
	}
	
	@RequestMapping("tip/{id}/del")
	public String tipDel(@PathVariable("id") String id) {
		
		service.tipDel(id);
		
		return "redirect:../../tip";
	}
	
	/*-------------- Info 게시판 --------------*/
	
	@RequestMapping("info")
	public String info(@RequestParam(value = "p", defaultValue = "1") int page, Model model,Info info) {
	
		
		  List<Info> listInfo = service.getInfoList(page);
		  List<Imgview> imgInfo = service.getId();
		
          model.addAttribute("list", listInfo);
   
          model.addAttribute("list2", imgInfo);
         //타이틀 받아오기
       
          return "admin.board.info.list";
		
	}
	
	@RequestMapping("info/{id}")
	public String infoDetail(@PathVariable("id") String id, Model model) {
		
		service.updateInfoHit(id);
		model.addAttribute("i", service.getInfo(id));	  
	    model.addAttribute("prev", service.getInfoPrev(id));
	    model.addAttribute("next", service.getInfoNext(id));
	    
	  //댓글 모델 설정
	  		List<Comment> list = service.getInfoCommentList(id);
	  		model.addAttribute("infoCommentList",list);
	         
	    return "admin.board.info.detail";
	}
	
	@RequestMapping(value="info/{id}/edit",method=RequestMethod.GET)
	public String infoUpdate(@PathVariable("id") String id, Model model) {
		
		model.addAttribute("i", service.getInfo(id));
		
		return "admin.board.info.edit";
		
	}

	@RequestMapping(value="info/{id}/edit",method=RequestMethod.POST)
	public String infoUpdate(@PathVariable("id") String id, Info info) {
		
		service.infoUpdate(id, info);
		
	return "redirect:../../info/{id}";	
	}
	
	@RequestMapping(value="info/reg", method=RequestMethod.GET)
    public String noticeReg() {
       return "admin.board.info.reg";
    }
	
	@RequestMapping(value="info/reg", method=RequestMethod.POST)
	public String infoReg(Info info,MultipartFile file,HttpServletRequest request, Principal principal) {
		
		service.getInfoNextId();
		String writerId = principal.getName();
		service.infoInsert(info.getTitle(), info.getContent(), writerId);
		
		return "redirect:../info";
		
	}
	
	@RequestMapping("info/{id}/del")
	public String infoDel(@PathVariable("id") String id) {
		
		service.infoDel(id);
		
		return "redirect:../../info";
	}
	/*------------------------------댓글 start--------------------------*/

    //AJAX 호출 (댓글 등록)
    @RequestMapping(value="info/comment/save", method=RequestMethod.POST)
    @ResponseBody
    //public String boardReplySave(@RequestParam Map<String , Object>comment_content) {
    public String boardCommentSave(@RequestParam Map<String, Object> objParams,Principal principal) {
    	 
    	//System.out.println("댓글controller");
        //정보입력
    	String content = objParams.get("comment_content").toString();
    	String info_id = objParams.get("info_id").toString();
    	String writer_id = principal.getName();
   
        int result = service.InfocommentInsert(content, info_id, writer_id);
        if(result>0){
        	System.out.println("comment등록에 성공하였습니다.");
        }else{
            System.out.println("comment등록에 실패하였습니다.");
        }
        //return "admin.board.info.detail";
        return "aa";
    }
    @RequestMapping(value="info/comment/update-ajax", method=RequestMethod.GET)
    @ResponseBody
    public String boardCommentUpdate(@RequestParam String infoId,@RequestParam String cId) {
	
    	//정보입력
    	System.out.println("infoId : "+infoId+", id : "+cId);
    	List<Comment> list = service.getInfoUpdateCommentList(infoId,cId);
    	if(list==null)
    		System.out.println("최신글입니다");
    	else 
    		System.out.println("최신 :"+list);
    	
    	String json = "";	
		Gson gson = new Gson();
		json = gson.toJson(list);
		
		return json;
    }
    
    
 /*
    //AJAX 호출 (댓글 삭제)
    @RequestMapping(value="/board/reply/del", method=RequestMethod.POST)
    @ResponseBody
    public Object boardReplyDel(@RequestParam Map<String, Object> paramMap) {
 
        //리턴값
        Map<String, Object> retVal = new HashMap<String, Object>();
 
        //패스워드 암호화
        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        String password = encoder.encodePassword(paramMap.get("reply_password").toString(), null);
        paramMap.put("reply_password", password);
 
        //정보입력
        int result = boardService.delReply(paramMap);
 
        if(result>0){
            retVal.put("code", "OK");
        }else{
            retVal.put("code", "FAIL");
            retVal.put("message", "삭제에 실패했습니다. 패스워드를 확인해주세요.");
        }
 
        return retVal;
 
 */
	/*------------------------------댓글 end--------------------------*/
	
	
	
	
	
	
	
	
	/*-------------- Voting 게시판 --------------*/
	
	@RequestMapping("voting")
	public String voting(@RequestParam(value = "p", defaultValue = "1") int page, @RequestParam(value = "q", defaultValue = "") String query, Model model) {
		
		List<Voting> list = service.getVotingList(page, query);
		int count = service.getVotingCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.board.voting.list";
	}
	
	@RequestMapping("voting/{id}")
	public String votingDetail(@PathVariable("id") String id, Model model) {
		
		List<String> pics = service.getVotingImgs(id);
		System.out.println(pics);
		
		Voting prev = service.getVotingPrev(id);
		Voting next = service.getVotingNext(id);
		service.updateVotingHit(id);

		model.addAttribute("v", service.getVoting(id));
		model.addAttribute("pics", pics);
		model.addAttribute("prev", prev);
		model.addAttribute("next", next);

		return "admin.board.voting.detail";
	}
	
	@RequestMapping(value = "voting/{id}/edit", method = RequestMethod.GET)
	public String votingUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("v", service.getVoting(id));
		
		return "admin.board.voting.edit";
	}
	
	@RequestMapping(value = "voting/{id}/edit", method = RequestMethod.POST)
	public String votingUpdate(@PathVariable("id") String id, Voting voting) {
		
		service.votingUpdate(id, voting);
		
		return "redirect:../../voting/{id}";
	}
	
	@RequestMapping(value = "voting/reg", method = RequestMethod.GET)
	public String votingReg() {
		return "admin.board.voting.reg";
	}

	@RequestMapping(value = "voting/reg", method = RequestMethod.POST)
	public String votingReg(Voting voting, MultipartFile file, HttpServletRequest request, Principal principal) throws IOException {

		int nextId = service.getVotingNextId();
		String writerId = principal.getName();
		
		service.votingInsert(voting.getTitle(), voting.getContent(), writerId);

		return "redirect:../voting";
	}
	
	@RequestMapping("voting/{id}/del")
	public String votingDel(@PathVariable("id") String id) {
		
		service.votingDel(id);
		
		return "redirect:../../voting";
	}
	
	/*-------------- Advice 게시판 --------------*/
	
	@RequestMapping("advice")
	public String advice(@RequestParam(value = "p", defaultValue = "1") int page, @RequestParam(value = "q", defaultValue = "") String query, Model model) {
		
		List<Advice> list = service.getAdviceList(page, query);
		int count = service.getAdviceCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.board.advice.list";
	}
	
	@RequestMapping("advice/{id}")
	public String adviceDetail(@PathVariable("id") String id, Model model) {
		
		Advice prev = service.getAdvicePrev(id);
		Advice next = service.getAdviceNext(id);
		service.updateAdviceHit(id);
		Advice advice = service.getAdvice(id);
		List<Advice> prevList = service.getPrevAdviceList(advice.getWriterId(), advice.getDate());

		model.addAttribute("a", advice);
		model.addAttribute("prevlist", prevList);
		model.addAttribute("prev", prev);
		model.addAttribute("next", next);

		return "admin.board.advice.detail";
	}
	
	@RequestMapping(value = "advice/{id}/edit", method = RequestMethod.GET)
	public String adviceUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("a", service.getAdvice(id));
		
		return "admin.board.advice.edit";
	}
	
	@RequestMapping(value = "advice/{id}/edit", method = RequestMethod.POST)
	public String adviceUpdate(@PathVariable("id") String id, Advice advice) {
		
		service.adviceUpdate(id, advice);
		
		return "redirect:../../advice/{id}";
	}
	
	@RequestMapping(value = "advice/reg", method = RequestMethod.GET)
	public String adviceReg() {
		return "admin.board.advice.reg";
	}

	@RequestMapping(value = "advice/reg", method = RequestMethod.POST)
	public String adviceReg(Advice advice, MultipartFile file, HttpServletRequest request, Principal principal) throws IOException {

		int nextId = service.getAdviceNextId();
		String writerId = principal.getName();
		
		service.adviceInsert(advice.getTitle(), advice.getContent(), writerId);

		return "redirect:../advice";
	}
	
	@RequestMapping("advice/{id}/del")
	public String adviceDel(@PathVariable("id") String id) {
		
		service.adviceDel(id);
		
		return "redirect:../../advice";
	}
	
}