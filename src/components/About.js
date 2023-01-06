import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import profilepic from "../assets/myProfile.jpg";

class About extends Component {
	render() {
		if (this.props.sharedBasicInfo) {
			// var profilepic = "images/" + this.props.sharedBasicInfo.image;
		}
		if (this.props.resumeBasicInfo) {
			var sectionName =
				this.props.resumeBasicInfo.section_name.about;
			var hello = this.props.resumeBasicInfo.description_header;
			// var about = this.props.resumeBasicInfo.description;
			var about = "asd \n asd \n";
		}

		return (
			<section id="about">
				<div className="col-md-12">
					<h1 style={{ color: "black" }}>
						<span>{sectionName}</span>
					</h1>
					<div className="row center mx-auto mb-5">
						<div className="col-md-4 mb-5 center">
							<div className="polaroid">
								<span
									style={{ cursor: "auto" }}
								>
									<img
										height="100%"
										src={profilepic}
										alt="Avatar placeholder"
									/>
									{/* <Icon
										icon={angularIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/>
									<Icon
										icon={reactIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/>
									<Icon
										icon={vueIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/> */}
								</span>
							</div>
						</div>

						<div className="col-md-8 center">
							<div className="col-md-10">
								<div className="card">
									<div className="card-header">
										<span
											className="iconify"
											data-icon="emojione:red-circle"
											data-inline="false"
										></span>{" "}
										&nbsp;{" "}
										<span
											className="iconify"
											data-icon="twemoji:yellow-circle"
											data-inline="false"
										></span>{" "}
										&nbsp;{" "}
										<span
											className="iconify"
											data-icon="twemoji:green-circle"
											data-inline="false"
										></span>
									</div>
									<div
										className="card-body font-trebuchet text-justify ml-3 mr-3"
										style={{
											height: "auto",
											fontSize: "132%",
											lineHeight:
												"200%",
										}}
									>
										<br />
										<span className="wave">
											{hello} :){" "}
										</span>
										<br />
										<br></br>
										{
											"Greetings and welcome to my humble portfolio! I am Olsen, a computer science major at the esteemed Davidson College and a soon-to-be software engineer. While I may have a strong academic background, I promise I'm not just a stuffy bookworm. I love nothing more than getting my hands dirty and building new things. "
										}
										<br></br>
										<br></br>
										{
											"In my free time, you can find me playing guitar and staying active by weightlifting. Also, as the founder and president of the Competitive Coding club at Davidson, I have also had the opportunity to lead my team to victory at various hackathons, winning over 11 prizes across 8 different events (including first place at Caltech)."
										}
										<br></br>
										<br></br>
										{
											"In addition to my academic and extracurricular pursuits, I also run a successful software contracting company with my friend Spencer Hawkins. We go by the name Hawkins and Olsen Technologies, or HOT for short, and have had a total of 4 clients with a revenue of around $10,000 from building custom software."
										}
										<br></br>
										<br></br>
										{
											"With a strong foundation in computer science and a passion for building and creating, I believe I would be a great fit for any team. I am excited to continue growing as a programmer and leader, and I am always open to new opportunities. Feel free to reach out to me through LinkedIn or email at olsenbudanur@gmail.com."
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
