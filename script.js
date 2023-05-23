function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const defaultMarkdown = `

# This is a heading - type your markdown in the editor!
<br><br>

## Subheading - this is what you can do!

Lists...
- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`let x = 42;\`
\`\`\`html
<h1>The answer to life, the universe, and everything...</h1>;
<p> is x </p>;
\`\`\`
<br>

You should read [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams)

> “I can resist anything except temptation.”
― Oscar Wilde
<br>

I just love **bold text**.

![Ross Castle](https://cdn.pixabay.com/photo/2017/09/27/10/34/castle-2791687_1280.jpg)
<br>
`;

// Line breaks allowed
marked.setOptions({
  breaks: true });


// Line breaks allowed
marked.setOptions({
  breaks: true });


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: defaultMarkdown });_defineProperty(this, "onChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.state.text,
        onChange: this.onChange,
        placeholder: "Enter Markdown..." }), /*#__PURE__*/

      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: { __html: marked(this.state.text) } }), /*#__PURE__*/


      React.createElement("div", { id: "signature" }, "FreeCodeCamp Front End Libraries Certification project by Aisling Langston (2023)")));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));