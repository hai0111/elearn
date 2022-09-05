import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import routes from './routes'

function App() {
	const pageContent = routes.publicPath.map((route) => {
		const Layout = route.layout || DefaultLayout
		const Page = route.component
		return (
			<Route
				path={route.path}
				key={route.path}
				element={
					<Layout>
						<Page />
					</Layout>
				}
			/>
		)
	})
	return (
		<BrowserRouter>
			<Routes>{pageContent}</Routes>
		</BrowserRouter>
	)
}

export default App
