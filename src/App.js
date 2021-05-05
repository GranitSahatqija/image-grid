import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/AppHeader'));
const Grid = lazy(() => import('./components/grid/Grid'));

function App() {
	return (
		<div className="app">
			<Suspense fallback={<div>Loading header...</div>}>
				<Header />
			</Suspense>
			<section className="container">
				<h1>GALLERY GRID</h1>
				<p>Simple gallery grid developed in React</p>
			</section>
			<Suspense fallback={<div>Loading grid...</div>}>
				<Grid />
			</Suspense>
		</div>
	);
}

export default App;
