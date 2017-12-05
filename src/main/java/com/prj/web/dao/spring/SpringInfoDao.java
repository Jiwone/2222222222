package com.prj.web.dao.spring;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.prj.web.dao.InfoDao;
import com.prj.web.entity.Drama;
import com.prj.web.entity.Free;
import com.prj.web.entity.Imgview;
import com.prj.web.entity.Info;
import com.prj.web.entity.Tip;

public class SpringInfoDao implements InfoDao{

	@Autowired
	private JdbcTemplate template;
	private List<String> imgList;
	private ArrayList<HashMap<String,String>> listOfMap = new ArrayList<HashMap<String,String>>();
	private ArrayList<HashMap<String,String>> listOfTitle = new ArrayList<HashMap<String,String>>();
	@Override
	public List<Info> getList(int page) {
		String sql = "select * from Info order by date DESC limit ?,10";

		List<Info> list = template.query(sql, new Object[] { (page - 1) * 10 },
				BeanPropertyRowMapper.newInstance(Info.class));

		return list;
	}

	@Override
	public Info getInfo(String id) {
		String sql = "select * from Info where id=?";

		Info info = template.queryForObject(sql, new Object[] {id}, BeanPropertyRowMapper.newInstance(Info.class));
		return info;
	}

	@Override
	public Info getInfoPrev(String id) {
		String sql = "select * from Info where id < CAST(? as UNSIGNED) order by date DESC limit 1";
		
		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Info.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}

	@Override
	public Info getInfoNext(String id) {
		String sql = "select * from Info where id > CAST(? as UNSIGNED) order by date ASC limit 1";

		try {
			return template.queryForObject(sql, new Object[] { id }, BeanPropertyRowMapper.newInstance(Info.class));
		} catch(EmptyResultDataAccessException e) {			
			return null;
		}
	}
	
	@Override
	public int getInfoCount() {
		String sql = "SELECT COUNT(id) as count FROM Info";
		
		int count = template.queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public int update(String id, Info info) {
		String sql = "update Info set title = ?, content = ? where id = ?;";

		int result = template.update(sql, info.getTitle(), info.getContent(), id);
		
		return result;
	}
	
	@Override
	public int updateHit(String id) {
		String sql = "update Info set hit = ifnull(hit,0)+1 where id = ?;";
		
		return template.update(sql, id);
	}

	@Override
	public int insert(Info info) {
		String sql = "insert into Info(id, title, content, writerId, hit) values(?, ?, ?, ?, 0);";
		
		int insert = template.update(sql, 
						getNextId(), 
						info.getTitle(), 
						info.getContent(), 
						info.getWriterId());		
				
		return insert;
	}
	
	@Override
	public int insert(String title, String content, String writerId) {
		return insert(new Info(title, content, writerId));
	}

	
	
	@Override
	public int tipInsert(Tip tip) {
		String sql = "insert into Tip(id, title, content, writerId, hit) values(?, ?, ?, ?, 0);";
		
		int insert = template.update(sql, 
						getNextId(), 
						tip.getTitle(), 
						tip.getContent(), 
						tip.getWriterId());		
				
		return insert;
	}
	
	
	@Override
	public int tipInsert(String title, String content, String writerId) {
		
		return 0;
	}

	
	@Override
	public int dramaInsert(Drama drama) {
		String sql = "insert into Drama(id, name, content, writerId) values(?, ?, ?, ?);";
		
		int insert = template.update(sql, 
						getNextId(), 
						drama.getName(), 
						drama.getContent(), 
						drama.getWriterId());		
				
		return insert;
	}
	
	@Override
	public int dramaInsert(String title, String content, String writerId) {
		
		return 0;
	}


	@Override
	public int delete(String id) {
		String sql = "delete from Info where id = ?";
		
		int del = template.update(sql, id);
		
		return del;
	}

	@Override
	public int getNextId() {
		String sql = "select ifnull(MAX(CAST(id as unsigned)),0)+1 from Info";
		
		int nextId = template.queryForObject(sql, Integer.class);
		System.out.println(nextId);
		
		return nextId;
	}


	public List<Imgview> getId() {

		String sql = "select id from soonface2db.Info";
		
		List<String> list = template.queryForList(sql,String.class);
		
		for(int i=0; i<list.size();i++) {
			System.out.println("list"+list.get(i));

			System.out.println("img : "+ getImgsrc(list.get(i)));
			System.out.println("title : " +getTitle2(list.get(i)));
			
			//insert
			update2(list.get(i),getImgsrc(list.get(i)),getTitle2(list.get(i)));

		}

		String sql2 = "select * from Imgview";
		List<Imgview> list2 = template.query(sql2,
				BeanPropertyRowMapper.newInstance(Imgview.class));
		return list2;
	}
	
	@Override
	public int update2(String id, String content, String title) {

		String sql = "update Imgview set id=?,content=?,title=? where id =? ";
		return template.update(sql,
								id,
								content,
								title,
								id);
	
	}
	
	
	@Override
	public String getImgsrc(String id) {
		
		//그럼 여기서 그 id랑 content랑 같이 list에 저장.
		String sql = "select content from soonface2db.Info where id= ?";
		System.out.println("dao : ");
		String next = template.queryForObject(sql, new Object[] {id}, String.class);
		//content만 가꼬와서
		 Pattern nonValidPattern = Pattern
			  		.compile("<img[^>]*src=[\\\"']?([^>\\\"']+)[\\\"']?[^>]*>");
			  		int imgCnt = 0;
			  		String content = "";
			  		Matcher matcher = nonValidPattern.matcher(next);
			  		while (matcher.find()) {
			  			content = matcher.group(1);
			  			//System.out.println("img::"+matcher.group(1));
			  			imgCnt++;
			  			if(imgCnt == 1){
			  		        break;                                  
			  		    }
			  		}
			  		return content; 
			  	}

	@Override
	public String getTitle2(String id) {
		String sql = "select title from soonface2db.Info where id= ?";
		String title = template.queryForObject(sql, new Object[] {id}, String.class);
		return title;
	}




}
