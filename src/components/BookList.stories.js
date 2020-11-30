import React from "react";
import BookList from "./BookList";

const list = [
        {
            id:"1",
            title:"Dynamic Research Strategist",
            description:"Generic Plastic Chips",
            coverUrl:"http://lorempixel.com/64/480/city",
        },
        {
            id:"2",
            title:"Product Interactions Executive",
            description:"Licensed Metal Computer",
            coverUrl:"http://lorempixel.com/64/480/cats",
        }];
export const Primary = () => <BookList primary list={list} />;