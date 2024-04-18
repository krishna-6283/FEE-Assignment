// App.js

import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [title1, setTitle1] = useState("");
	const [title2, setTitle2] = useState("");

	const [des, setDes] = useState("");
	const [des1, setDes1] = useState("");
	const [des2, setDes2] = useState("");

	const [notes, setNotes] = useState(data);
  const [notes1, setNotes1] = useState(data1);
  const [notes2, setNotes2] = useState(data2);
	const [count, setCount] = useState(4);

	function remove(id) {
		setNotes(notes.filter((e) => e.key !== id));
	}
  function remove1(id) {
		setNotes1(notes1.filter((e) => e.key !== id));
	}
  function remove2(id) {
		setNotes2(notes2.filter((e) => e.key !== id));
	}

	function handle() {
		if (!title || !des) {
			window.alert("Incomplete input");
			return;
		}
		setNotes([...notes, { key: count, title: title, des: des }]);
		setCount(count + 1);
		setTitle("");
		setDes("");
		console.log(notes);
	}
  function handle1() {
		if (!title1 || !des1) {
			window.alert("Incomplete input");
			return;
		}
		setNotes1([...notes1, { key: count, title: title1, des: des1 }]);
		setCount(count + 1);
		setTitle1("");
		setDes1("");
		console.log(notes);
	}
  function handle2() {
		if (!title2 || !des2) {
			window.alert("Incomplete input");
			return;
		}
		setNotes2([...notes2, { key: count, title: title2, des: des2 }]);
		setCount(count + 1);
		setTitle2("");
		setDes2("");
		console.log(notes);
	}

	return (
		<div className="App">
      <div className="head">
					<h1>React notes</h1>
				</div>
			<div className="card">
				<div className="notestoself">
        <div className="notes">
					{notes.map((e) => (
					<div className="notes-item" style={{ backgroundColor:"yellow"}}>
          <div style={{ width: "90%" ,padding: "2%",}}>
            <h4>Title: {e.title}</h4>
            <p>Note: {e.des}</p>
          </div>
          <div style={{ width: "10%"}}>
          <button
            type="input"
            style={{
              fontSize: "10px",
              width: "100%",
              height: "100%",
              // padding: "0 2% 0 2%",
              padding: 0,
              margin: 0,
              color: "black",
            }}
            onClick={() => remove(e.key)}
          >
            X
          </button>
          </div>
          
        </div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
            
						<input
							type="text"
							id="title"
							placeHolder="Add title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input>
						<input
							type="text"
							id="description"
							placeholder="Notes"
							value={des}
							onChange={(e) => {
								setDes(e.target.value);
							}}
						></input>
						<button type="submit" onClick={handle}>
							Submit
						</button>
					</div>
				</div>
        </div>
        <div className="notesofficial">
        <div className="notes">
					{notes1.map((e) => (
					<div className="notes-item" style={{ backgroundColor:"orange"}}>
          <div style={{ width: "90%" ,padding: "2%",}}>
            <h4>Title: {e.title}</h4>
            <p>Note: {e.des}</p>
          </div>
          <div style={{ width: "10%"}}>
          <button
            type="input"
            style={{
              fontSize: "10px",
              width: "100%",
              height: "100%",
              // padding: "0 2% 0 2%",
              padding: 0,
              margin: 0,
              color: "black",
            }}
            onClick={() => remove1(e.key)}
          >
            X
          </button>
          </div>
          
        </div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
						<input
							type="text"
							id="title"
							placeHolder="Add title"
							value={title1}
							onChange={(e) => setTitle1(e.target.value)}
						></input>
						<input
							type="text"
							id="description"
							placeholder="Notes"
							value={des1}
							onChange={(e) => {
								setDes1(e.target.value);
							}}
						></input>
						<button type="submit" onClick={handle1}>
							Submit
						</button>
					</div>
				</div>
        </div>
        <div className="noteshome">
        <div className="notes">
					{notes2.map((e) => (
						<div className="notes-item" style={{ backgroundColor:"red"}}>
							<div style={{ width: "90%" ,padding: "2%",}}>
								<h4>Title: {e.title}</h4>
								<p>Note: {e.des}</p>
							</div>
              <div style={{ width: "10%"}}>
              <button
								type="input"
								style={{
									fontSize: "10px",
									width: "100%",
									height: "100%",
									// padding: "0 2% 0 2%",
                  padding: 0,
                  margin: 0,
									color: "black",
								}}
								onClick={() => remove2(e.key)}
							>
								X
							</button>
              </div>
							
						</div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
						<input
							type="text"
							id="title"
							placeHolder="Add title"
							value={title2}
							onChange={(e) => setTitle2(e.target.value)}
						></input>
						<input
							type="text"
							id="description"
							placeholder="Notes"
							value={des2}
							onChange={(e) => {
								setDes2(e.target.value);
							}}
						></input>
						<button type="submit" onClick={handle2}>
							Submit
						</button>
					</div>
				</div>
        </div>
			</div>
		</div>
	);
}

// Dummy data
const data = [
	{
		key: 0,
		title: "Html",
		des: "HyperText MarkUp Language",
	},
	{ key: 1, title: "CSS", des: "StyleSheet" },
	{
		key: 2,
		title: "JavaScript",
		des: "Scripting language for web",
	},
	{
		key: 3,
		title: "React",
		des: "JavaScript framework",
	},
];

const data1 = [
	{
		key: 0,
		title: "Html",
		des: "HyperText  Language",
	},
	{ key: 1, title: "CSS", des: "StyleSheet" },
	{
		key: 2,
		title: "JavaScript",
		des: "Scripting language for web",
	},
	{
		key: 3,
		title: "React",
		des: "JavaScript framework",
	},
];

const data2 = [
	{
		key: 0,
		title: "Html",
		des: " MarkUp Language",
	},
	{ key: 1, title: "CSS", des: "StyleSheet" },
	{
		key: 2,
		title: "JavaScript",
		des: "Scripting language for web",
	},
	{
		key: 3,
		title: "React",
		des: "JavaScript framework",
	},
];

export default App;
