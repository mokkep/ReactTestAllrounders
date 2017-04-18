class App extends React.Component {
	
	
	constructor() {
		
		super();
		
		this.state = {
				
				RankingTop7: [],
				RankingHel: [],
				RankingVan: []
				
		}
					
	}

	componentWillMount() {
		console.log('componentWillMount')
		this.fetchTopSeven();
		this.fetchTopHel();
		this.fetchTopVan();
	}
	
	fetchTopSeven(){
		
		console.log('fetchTopSeven');
		$.ajaxSetup({
		  headers: {
				"Secret":"B55AF471FFE583FEB96EF0788EBF9FCBA678592F70CB8508F5D43ED64A1C0E90B598C627389A913776EEE1AFEFEDE85AB82CB8AD46DF7AE3CE24072196738A9B",
			}
		});
		$.getJSON('http://188.166.62.104/AllRounders/top', 
			function(data) { 
				console.log("Successfully fetched top7"); 
				this.setState({
					RankingTop7: data
				})
			}.bind(this)
		);
		
	}
	
	fetchTopHel(){
		console.log('fetchTopHel');
		
	}
	
	fetchTopVan(){
		console.log('fetchTopVan');
		
	}
	
	
	render(){
		
		console.log('render');
		//return (<div>{JSON.stringify(this.state.RankingTop7)}</div>);
		//return(<ul>{this.state.RankingTop7.map(function(user, i){return <li key={i}>{user.name}</li>})}</ul>);
        return( <div><ul><li>Wussup</li></ul></div>);
	}
	
}
ReactDOM.render(<App/>, document.getElementById('root'));
