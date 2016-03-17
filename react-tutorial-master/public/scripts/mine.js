// To get started with this tutorial running your own code, simply remove
// the script tag loading scripts/example.js and start writing code here.

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hi, I'm a comment box.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById("content");
);