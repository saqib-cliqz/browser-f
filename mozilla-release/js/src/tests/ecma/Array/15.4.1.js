/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.4.1.js
   ECMA Section:       15.4.1 The Array Constructor Called as a Function

   Description:        When Array is called as a function rather than as a
   constructor, it creates and initializes a new array
   object.  Thus, the function call Array(...) is
   equivalent to the object creationi new Array(...) with
   the same arguments.

   Author:             christine@netscape.com
   Date:               7 october 1997
*/

var SECTION = "15.4.1";
var TITLE   = "The Array Constructor Called as a Function";

writeHeaderToLog( SECTION + " "+ TITLE);

new TestCase(
		"Array() +''",
		"",
		Array() +"" );

new TestCase(
		"typeof Array()",
		"object",
		typeof Array() );

new TestCase(
		"var arr = Array(); arr.getClass = Object.prototype.toString; arr.getClass()",
		"[object Array]",
		eval("var arr = Array(); arr.getClass = Object.prototype.toString; arr.getClass()") );

new TestCase(
		"var arr = Array(); arr.toString == Array.prototype.toString",
		true,
		eval("var arr = Array(); arr.toString == Array.prototype.toString") );

new TestCase(
		"Array().length",
		0,
		Array().length );

new TestCase(
		"Array(1,2,3) +''",
		"1,2,3",
		Array(1,2,3) +"" );

new TestCase(
		"typeof Array(1,2,3)",
		"object",
		typeof Array(1,2,3) );

new TestCase(
		"var arr = Array(1,2,3); arr.getClass = Object.prototype.toString; arr.getClass()",
		"[object Array]",
		eval("var arr = Array(1,2,3); arr.getClass = Object.prototype.toString; arr.getClass()") );

new TestCase(
		"var arr = Array(1,2,3); arr.toString == Array.prototype.toString",
		true,
		eval("var arr = Array(1,2,3); arr.toString == Array.prototype.toString") );

new TestCase(
		"Array(1,2,3).length",
		3,
		Array(1,2,3).length );

new TestCase(
		"typeof Array(12345)",
		"object",
		typeof Array(12345) );

new TestCase(
		"var arr = Array(12345); arr.getClass = Object.prototype.toString; arr.getClass()",
		"[object Array]",
		eval("var arr = Array(12345); arr.getClass = Object.prototype.toString; arr.getClass()") );

new TestCase(
		"var arr = Array(1,2,3,4,5); arr.toString == Array.prototype.toString",
		true,
		eval("var arr = Array(1,2,3,4,5); arr.toString == Array.prototype.toString") );

new TestCase(
		"Array(12345).length",
		12345,
		Array(12345).length );

test();
