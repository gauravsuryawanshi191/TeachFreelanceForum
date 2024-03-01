package com.app.custom_exception_handling;

public class ApiException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public ApiException(String mesg) {
		super(mesg);
	}
}
