import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

const Chat = () => {
	useEffect(()=> {
		const data = queryString.parse(location,search);

			socket{name,room} = queryString.parse(location.search);

		setName(name);
		setRoom(room);

	});

	return {
		<h1>Chat</h1>
	}
}


export deafult Chat;