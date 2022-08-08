import plasmatorch from './images/plasmatorch.jpg'

function App() {
	return (
		<div className='textaligncenter'>
			<h1>
				Future home of <strong>FAB²</strong>
			</h1>
			<div>
				a <strong>DARK WATER CUSTOMS</strong> company
			</div>
			<img src={plasmatorch} alt='logo' />
			<div>
				If you are a <strong>visitor</strong>, check back soon.
			</div>
		</div>
	)
}

export default App
