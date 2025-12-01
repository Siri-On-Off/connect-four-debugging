import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("dummy", () => {
  const board = new Board();
  const winner = board.winner(Player.PlayerX, 1, 1);
  assertEquals(winner, Player.Nobody);
});

Deno.test("Diagonal (falling) winner is detected", () => {
  const board = new Board();

  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0); // 1. falling diagonal, COL 0, ROW 2

  board.makeMove(Player.PlayerX, 2);
  board.makeMove(Player.PlayerO, 1);
  board.makeMove(Player.PlayerX, 1);
  board.makeMove(Player.PlayerO, 1); // 2. falling diagonal, COL 1, ROW 2

  board.makeMove(Player.PlayerO, 4);
  board.makeMove(Player.PlayerO, 2); // 3. falling diagonal, COL 2, ROW 4
  board.makeMove(Player.PlayerX, 4);

  board.makeMove(Player.PlayerO, 3); // 4. falling diagonal, COL 3, ROW 5

  //    C0 C1 C2 C3 C4 C5 C6     
  // R0 _  _  _  _  _  _  _ 
  // R1 _  _  _  _  _  _  _ 
  // R2 o  _  _  _  _  _  _ 
  // R3 x  o  _  _  _  _  _ 
  // R4 o  x  o  _  x  _  _ 
  // R5 x  o  x  o  x  _  _
  //
  // (C0 - C6, COL = Spalten)
  // (R0 - R5, ROW = Zeilen/Reihen)

  const winner = board.winner(Player.PlayerO, 5, 3);
  assertEquals(winner, Player.PlayerO);
});