package com.prj.web.controller.admin;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.prj.web.entity.Advice;
import com.prj.web.entity.Free;
import com.prj.web.entity.Info;
import com.prj.web.entity.Tip;
import com.prj.web.entity.User;
import com.prj.web.entity.Voting;
import com.prj.web.service.admin.MypageService;

@Controller
@RequestMapping("/admin/mypage/*")
public class MypageController {
	
	@Autowired
	private MypageService service;
	
	/*-------------- user 관리 게시판 --------------*/
	
	@RequestMapping("index")
	public String index() {
		return "admin.mypage.index";
	}
	
	@RequestMapping(value = "user", method = {RequestMethod.GET, RequestMethod.POST})
	public String userManage(@RequestParam(value = "p", defaultValue = "1") int page, 
						@RequestParam(value = "q", defaultValue = "")String query, 
						@RequestParam(value="userChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.userDel(chk);
	    }
		
		List<User> list = service.getUserList(page, query);
		int count = service.getUserCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.mypage.user.list";
	}
	
	@RequestMapping(value = "user/{id}/edit", method = RequestMethod.GET)
	public String userUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("u", service.getUser(id));
		
		return "admin.mypage.user.edit";
	}
	
	@RequestMapping(value = "user/{id}/edit", method = RequestMethod.POST)
	public String userUpdate(@PathVariable("id") String id, User User) {
		
		service.userUpdate(id, User);
		
		return "redirect:../../user";
	}
	
	/*-------------- Advice 게시판 --------------*/

	@RequestMapping(value = "advice", method = {RequestMethod.GET, RequestMethod.POST})
	public String advice(@RequestParam(value = "p", defaultValue = "1") int page, 
						@RequestParam(value = "q", defaultValue = "")String query, 
						@RequestParam(value="adviceChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.adviceDel(chk);
	    }
		
		List<Advice> list = service.getAdviceList(page, query);
		int count = service.getAdviceCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.mypage.advice.list";
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

		return "admin.mypage.advice.detail";
	}
	
	@RequestMapping(value = "advice/{id}/edit", method = RequestMethod.GET)
	public String adviceUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("a", service.getAdvice(id));
		
		return "admin.mypage.advice.edit";
	}
	
	@RequestMapping(value = "advice/{id}/edit", method = RequestMethod.POST)
	public String adviceUpdate(@PathVariable("id") String id, Advice advice) {
		
		service.adviceUpdate(id, advice);
		
		return "redirect:../../advice/{id}";
	}
	
	@RequestMapping(value = "advice/reg", method = RequestMethod.GET)
	public String adviceReg() {
		return "admin.mypage.advice.reg";
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
	
	/*-------------- Free 게시판 --------------*/
	
	@RequestMapping(value="free", method = {RequestMethod.GET, RequestMethod.POST})
	public String free(@RequestParam(value = "p", defaultValue = "1") int page, 
			@RequestParam(value = "query", defaultValue = "")String query, 
						@RequestParam(value="freeChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.freeDel(chk);
	    }
		
		List<Free> list = service.getFreeList(page, query);
		int count = service.getFreeCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.mypage.free.list";
	}
	
	@RequestMapping("free/{id}")
	public String freeDetail(@PathVariable("id") String id, Model model) {

		service.updateFreeHit(id);
		model.addAttribute("f", service.getFree(id));
		model.addAttribute("prev", service.getFreePrev(id));
		model.addAttribute("next", service.getFreeNext(id));

		return "admin.mypage.free.detail";
	}
	
	@RequestMapping(value = "free/{id}/edit", method = RequestMethod.GET)
	public String freeUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("f", service.getFree(id));
		
		return "admin.mypage.free.edit";
	}
	
	@RequestMapping(value = "free/{id}/edit", method = RequestMethod.POST)
	public String freeUpdate(@PathVariable("id") String id, Free free) {
		
		int update = service.freeUpdate(id, free);
		
		return "redirect:../../free/{id}";
	}
	
	@RequestMapping(value = "free/reg", method = RequestMethod.GET)
	public String freeReg() {
		return "admin.mypage.free.reg";
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
	
	/*-------------- Voting 게시판 --------------*/
	
	@RequestMapping(value="voting", method = {RequestMethod.GET, RequestMethod.POST})
	public String voting(@RequestParam(value = "p", defaultValue = "1") int page, 
			@RequestParam(value = "query", defaultValue = "")String query, 
						@RequestParam(value="votingChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.votingDel(chk);
	    }
		
		List<Voting> list = service.getVotingList(page, query);
		int count = service.getVotingCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.mypage.voting.list";
	}

	@RequestMapping("voting/{id}")
	public String votingDetail(@PathVariable("id") String id, Model model) {
		
		Voting prev = service.getVotingPrev(id);
		Voting next = service.getVotingNext(id);
		service.updateVotingHit(id);

		model.addAttribute("v", service.getVoting(id));
		model.addAttribute("prev", prev);
		model.addAttribute("next", next);

		return "admin.mypage.voting.detail";
	}
	
	@RequestMapping(value = "voting/{id}/edit", method = RequestMethod.GET)
	public String votingUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("v", service.getVoting(id));
		
		return "admin.mypage.voting.edit";
	}
	
	@RequestMapping(value = "voting/{id}/edit", method = RequestMethod.POST)
	public String votingUpdate(@PathVariable("id") String id, Voting voting) {
		
		service.votingUpdate(id, voting);
		
		return "redirect:../../voting/{id}";
	}
	
	@RequestMapping(value = "voting/reg", method = RequestMethod.GET)
	public String votingReg() {
		return "admin.mypage.voting.reg";
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
	
	/*-------------- Info 게시판 --------------*/
	
	@RequestMapping(value="info", method = {RequestMethod.GET, RequestMethod.POST})
	public String info(@RequestParam(value = "p", defaultValue = "1") int page, 
						@RequestParam(value="infoChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.infoDel(chk);
	    }
		
		List<Info> listInfo = service.getInfoList(page);
		  int count = service.getInfoCount();
		  
        model.addAttribute("list", listInfo);
        model.addAttribute("count", count);
		
        return "admin.mypage.info.list";
	}
	
	@RequestMapping("info/{id}")
	public String infoDetail(@PathVariable("id") String id, Model model) {
		
		service.updateInfoHit(id);
		model.addAttribute("i", service.getInfo(id));	  
	    model.addAttribute("prev", service.getInfoPrev(id));
	    model.addAttribute("next", service.getInfoNext(id));
	         
	    return "admin.mypage.info.detail";
	}
	
	@RequestMapping(value="info/{id}/edit",method=RequestMethod.GET)
	public String infoUpdate(@PathVariable("id") String id, Model model) {
		
		model.addAttribute("i", service.getInfo(id));
		
		return "admin.mypage.info.edit";
		
	}

	@RequestMapping(value="info/{id}/edit",method=RequestMethod.POST)
	public String infoUpdate(@PathVariable("id") String id, Info info) {
		
		service.infoUpdate(id, info);
		
	return "redirect:../../info/{id}";	
	}
	
	@RequestMapping(value="info/reg", method=RequestMethod.GET)
    public String noticeReg() {
       return "admin.mypage.info.reg";
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
	
	/*-------------- Tip 게시판 --------------*/
	
	@RequestMapping(value="tip", method = {RequestMethod.GET,RequestMethod.POST})
	public String tip(@RequestParam(value = "p", defaultValue = "1") int page, 
			@RequestParam(value = "query", defaultValue = "")String query, 
						@RequestParam(value="tipChk", required=true, defaultValue="") List<String> chkList,
						Model model) {
		
		for(String chk : chkList) {
	        service.tipDel(chk);
	    }
		
		List<Tip> list = service.getTipList(page, query);
		int count = service.getTipCount();
		
		model.addAttribute("list", list);
		model.addAttribute("count", count);
		return "admin.mypage.tip.list";
	}
	
	@RequestMapping("tip/{id}")
	public String tipDetail(@PathVariable("id") String id, Model model) {
		
		Tip prev = service.getTipPrev(id);
		Tip next = service.getTipNext(id);
		service.updateTipHit(id);

		model.addAttribute("t", service.getTip(id));
		model.addAttribute("prev", prev);
		model.addAttribute("next", next);

		return "admin.mypage.tip.detail";
	}
	
	@RequestMapping(value = "tip/{id}/edit", method = RequestMethod.GET)
	public String tipUpdate(@PathVariable("id") String id, Model model) {

		model.addAttribute("t", service.getTip(id));
		
		return "admin.mypage.tip.edit";
	}
	
	@RequestMapping(value = "tip/{id}/edit", method = RequestMethod.POST)
	public String tipUpdate(@PathVariable("id") String id, Tip tip) {
		
		int update = service.tipUpdate(id, tip);
		
		return "redirect:../../tip/{id}";
	}
	
	@RequestMapping(value = "tip/reg", method = RequestMethod.GET)
	public String tipReg() {
		return "admin.mypage.tip.reg";
	}

	@RequestMapping(value = "tip/reg", method = RequestMethod.POST)
	public String tipReg(Tip tip, MultipartFile file, HttpServletRequest request, Principal principal) throws IOException {

		int nextId = service.getTipNextId();
		String writerId = principal.getName();
		System.out.println(writerId);
		

		service.tipInsert(tip.getTitle(), tip.getContent(), writerId);

		return "redirect:../tip";
	}
	
	@RequestMapping("tip/{id}/del")
	public String tipDel(@PathVariable("id") String id) {
		
		service.tipDel(id);
		
		return "redirect:../../tip";
	}
}
