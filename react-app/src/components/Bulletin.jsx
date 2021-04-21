/* Many thanks to Victoria Lo and her incredibly helpful guide at
https://lo-victoria.com/lets-build-a-simple-bulletin-board-react-app */

import React, {useState, useEffect, Component} from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import "./Bulletin.css"
import Login from "./Login/Login";
import useToken from "./home/useToken"
import {Row} from "react-bootstrap";





var randomColor = require("randomcolor");

export default function Bulletin() {


    const [item, setItem] = useState("");
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || []
    );

    const newitem = () => {
        if (item.trim() !== "") {
            //if input is not blank, create a new item object
            const newitem = {
                id: uuidv4(),
                item: item,
                color: randomColor({luminosity: "light",}),
                defaultPos: { x: 100, y: 0 },
            };
            //add this new item object to the items array
            setItems((items) => [...items, newitem]);
            //reset item value to empty string
            setItem("");
        } else {
            alert("Enter a item");
            setItem("");
        }
    };

    const keyPress = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            newitem();
        }
    };



    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);




    const updatePos = (data, index) => {
        let newArr = [...items];
        newArr[index].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
    };

    const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const deleteAllNotes = (id) => {
        items.shift(items.size);
        localStorage.removeItem("items");
        window.location.reload()


    };
    const { token, setToken } = useToken();

    if(!token) {
        return ( <div>
            <div>
            {items.map((item, index) => {
                return (
                    <Draggable
                        key={item.id}
                        defaultPosition={item.defaultPos}
                        onStop={(e, data) => {
                            updatePos(data, index);
                        }}
                    >
                        <div style={{backgroundColor: item.color}} className="box">
                            {`${item.item}`}

                        </div>
                    </Draggable>
                );
            })}

        </div>

            <Login setToken={setToken} />
        </div>);
    } else {


        return (
            <div className="Bulletin">
                <div id="new-item">
                    <input
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        placeholder="Enter something..."
                        onKeyPress={(e) => keyPress(e)}
                    />
                    <button onClick={newitem}>ENTER</button>
                </div>
                {items.map((item, index) => {
                    return (
                        <Draggable
                            key={item.id}
                            defaultPosition={item.defaultPos}
                            onStop={(e, data) => {
                                updatePos(data, index);
                            }}
                        >
                            <div style={{backgroundColor: item.color}} className="box">
                                {`${item.item}`}
                                <button id="delete" onClick={(e) => deleteNote(item.id)}>
                                    X
                                </button>
                            </div>
                        </Draggable>
                    );
                })}

                    <button id="clear" onClick={(e) => deleteAllNotes(item.id)}>
                        Clear All Posts
                    </button>

            </div>
        );
    }
}
