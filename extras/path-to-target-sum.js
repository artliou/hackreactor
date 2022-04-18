/***Prompt
You may use a whiteboard or paper to sketch things out, but please write your code in an IDE so you can write tests to demonstrate that your code works, and you can paste that code into a Github Gist upon solution submission.

You may only use the Internet to remind yourself of syntax (e.g., on the MDN site), not to look up anything specifically about this problem. Be reasonable -- stay within the bounds of what would be permissible in a live industry interview.

Tree has path to target sum?

You are given a binary tree whose nodes all have integer values (both positive and negative).

Given some target sum (say, 14), return true if there is any path starting from the root and ending in a leaf, such that adding up all the values along the path equals the given sum.

const hasPathToSum = function(node, targetSum) {
  // your code here
};
Hints

Try not to use the hints if you can help it, but if you do want one, use ROT-13 to decode.

Even though this problem is about adding up numbers along the way, in problems where you are seeking a target sum it's sometimes helpful to subtract as you go, instead.




Test Case
925am Ran into problems here: not sure how to expect trees to be done (linked list, doublely-linked?) without going outside of MDN.
Assuming array
835am: Completed implemention, since have time left; going to use hint to see if it helps with tree syntaax/test cases; Confident that my current works (at least logically. Syntaxtically maybe 5% doubt
937am: It didn't.

//Expects Tree
var node = 

hasPathToSum(node, 14);

//Expects False
var node 2 = 
hasPathToSum(node2, 14);


****/

const hasPathToSum = function(node, targetSum) {
  var bool = false;
  if (node.length === 0) {
    return bool;
  }
  //Start sum at node.value, done in 56;
  // var sum = node.value;

  //Recursively Traverses through the tree & finds sum @ the end of each path
  var pathCreate = function(tree, newSum) {
    let sum = newSum;
    //Base Case: End of Path/Ends at Leaf
    if (tree.left === null && tree.right === null) {
      //Check the sum at the end of the path
      if (sum === targetSum) { 
        bool = true; 
      }
      return bool;
    }
    if (tree.right !== null) {
      sum += tree.right;
      pathCreate(tree.right, sum);
    }

    if (tree.left !== null) {
      sum += tree.left;
      pathCreate(tree.left, sum);
    }
  };
  pathCreate(node, node.value);
  // return bool;
};


/***PseudoCode
Input: binary tree with nodes, Integer
Output: Boolean

Constraints - must be a path from node to end
Edge: No tree

Want to see if a path within the tree has the sum we want

OLD PLAN
Create an array to hold the sum of all the paths
Create a helper function that generates all the paths & returns their sums
push all the sums into the array
Iterate through the array

New Plan - better time complexity
Create a helper function that generates all the paths & returns their sums
if sum is equal to target sum, then stop & return true
Otherwise return false

***/