//Recap 복슴용 JS 파일

const root = document.querySelector("#root");

const App = () => {
    const [counter, countUp] = React.userState(0);
    const onClick = () => {
        countUp(counter + 1);
    };

    <div>
        <h3>Total Clicks : {counter}</h3>
        <button onClick={onClick}>Click Me</button>
    </div>;
};

ReactDom.render();
