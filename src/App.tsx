import * as React from "react";
import { useState } from "react";
import { DatePicker, message } from 'antd';
import "./App.scss";

function App() {
	const [date, setDate] = useState<any | null>(null);
	const handleChange = (value) => {
		message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
		setDate(value);
	  };

	return (
		<div style={{ width: 400, margin: '100px auto' }}>
		<DatePicker onChange={handleChange} />
		<div style={{ marginTop: 16 }}>
		  Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
		</div>
	  </div>
	);
}

export default App;
