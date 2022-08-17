const domContainer = document.app('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(app));


class App extends React.Component {
    render(){
        return (
            <h1>Hello</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;