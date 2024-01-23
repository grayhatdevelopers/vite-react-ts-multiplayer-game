

const FullPage = ({ children, style, ...rest }) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				background: 'black',
				...style,
			}}
			{...rest}
		>
			{children}
		</div>
	);
};

export default FullPage;
