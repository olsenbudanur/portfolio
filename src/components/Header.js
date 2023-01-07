import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Button } from "react-bootstrap";

class Header extends Component {
	titles = [];

	constructor() {
		super();
		this.state = { checked: false };
		this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
	}

	onThemeSwitchChange(checked) {
		this.setState({ checked });
		this.setTheme();
	}

	setTheme() {
		var dataThemeAttribute = "data-theme";
		var body = document.body;
		var newTheme =
			body.getAttribute(dataThemeAttribute) === "dark"
				? "light"
				: "dark";
		body.setAttribute(dataThemeAttribute, newTheme);
	}

	render() {
		if (this.props.sharedData) {
			var name = this.props.sharedData.name;
			this.titles = this.props.sharedData.titles
				.map((x) => [x.toUpperCase(), 1500])
				.flat();
		}

		const HeaderTitleTypeAnimation = React.memo(
			() => {
				return (
					<Typical
						className="title-styles"
						steps={this.titles}
						loop={50}
					/>
				);
			},
			(props, prevProp) => true
		);

		return (
			<header
				id="home"
				style={{
					height: 700,
					display: "block",
				}}
			>
				<div className="row aligner" style={{ height: "100%" }}>
					<div className="col-md-12">
						<div>
							<span
								className="iconify header-icon"
								data-icon="la:laptop-code"
								data-inline="false"
							></span>
							<br />
							<h1 className="mb-0">
								<Typical
									steps={[name]}
									wrapper="p"
								/>
							</h1>
							<div className="title-container">
								<HeaderTitleTypeAnimation />
							</div>
							<div></div>

							<Switch
								checked={this.state.checked}
								onChange={
									this.onThemeSwitchChange
								}
								offColor="#baaa80"
								onColor="#353535"
								className="react-switch mx-auto"
								width={90}
								height={40}
								uncheckedIcon={
									<span
										className="iconify"
										data-icon="twemoji:owl"
										data-inline="false"
										style={{
											display: "block",
											height: "100%",
											fontSize: 25,
											textAlign:
												"end",
											marginLeft:
												"20px",
											color: "#353239",
										}}
									></span>
								}
								checkedIcon={
									<span
										className="iconify iconifys"
										data-icon="noto-v1:sun-with-face"
										data-inline="false"
										style={{
											display: "block",
											height: "100%",
											fontSize: 25,
											textAlign:
												"end",
											marginLeft:
												"10px",
											color: "#353239",
										}}
									></span>
								}
								id="icon-switch"
							/>
						</div>

						<a
							target="_blank"
							href="https://docs.google.com/document/d/12zBFLAwzSviX2IhGvtC1LOWFG1YhV6UVYU_WAZjgnIk/edit?usp=sharing"
						>
							<Button
								style={{
									border: "none",
									position: "relative",
									bottom: "16px",
									width: "150px",
									marginTop: "40px",
								}}
							>
								<div
									className="row aligner"
									href="google.com"
								>
									<h4>Resume</h4>
									<span
										className="iconify iconifys"
										data-icon="mdi:resume"
										data-inline="false"
										style={{
											display: "block",
											height: "100%",
											fontSize: 25,
											textAlign:
												"end",
											marginLeft:
												"20px",
											color: "#353239",
										}}
									></span>
								</div>
							</Button>
						</a>
					</div>
					<a
						target="_blank"
						href="https://docs.google.com/document/d/1-wxAnpyD-HYyTqaCKZ-Vcjh7-ySazoGht04JZHwl-7M/edit?usp=sharing"
					>
						<Button
							style={{
								border: "none",
								position: "relative",
								bottom: "50px",
								width: "220px",
								marginTop: "-30px",
							}}
						>
							<div
								className="row aligner"
								href="google.com"
							>
								<h4>Academic Transcript</h4>
								<span
									className="iconify iconifys"
									data-icon="mdi:resume"
									data-inline="false"
									style={{
										display: "block",
										height: "100%",
										fontSize: 25,
										textAlign: "end",
										marginLeft: "20px",
										color: "#353239",
									}}
								></span>
							</div>
						</Button>
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
