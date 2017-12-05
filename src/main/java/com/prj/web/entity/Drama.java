package com.prj.web.entity;

import java.util.Date;

public class Drama {
	private int id;
	private String name;
	private String content;
	private String writerId;

	
	public Drama() {
		
	}

/*	public Drama(int id, String title, String content, int hit, String picture, String writerId, Date date) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.hit = hit;
		this.picture = picture;
		this.writerId = writerId;
		this.date = date;
	}*/

	public Drama(String name, String content, String writerId) {
		this.name = name;
		this.content = content;
		this.writerId = writerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getWriterId() {
		return writerId;
	}

	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}

	
	
}
