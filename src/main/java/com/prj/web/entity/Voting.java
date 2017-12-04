package com.prj.web.entity;

import java.util.Date;

public class Voting {
	private int id;
	private String title;
	private String content;
	private String writerId;
	private int hit;
	private Date date;
	
	public Voting() {
	}

	public Voting(int id, String title, String content, String writerId, int hit, Date date) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.writerId = writerId;
		this.hit = hit;
		this.date = date;
	}

	public Voting(String title, String content, String writerId) {
		this.title = title;
		this.content = content;
		this.writerId = writerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
}
