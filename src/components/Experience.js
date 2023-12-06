import React, { Component } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import ccad from "../assets/ccad3.png";
import afrm from "../assets/affirm.png";
import aptos from "../assets/aptos.png";
import search from "../assets/searchtech.jpeg";
import rocket from "../assets/rocketry.png";

class Experience extends Component {
	render() {
		if (this.props.resumeExperience && this.props.resumeBasicInfo) {
			var sectionName =
				this.props.resumeBasicInfo.section_name.experience;
			var work = this.props.resumeExperience.map(function (
				work,
				i
			) {
				const technologies = work.technologies;
				const mainTechnologies = work.mainTech;
				const logos = [ccad, afrm, search, rocket, aptos];

				const logo = logos[work.logo];

				const link = work.link;

				var mainTech = mainTechnologies.map((technology, i) => {
					return (
						<Badge
							pill
							className="main-badge mr-2 mb-2"
							key={i}
						>
							{technology}
						</Badge>
					);
				});
				var tech = technologies.map((technology, i) => {
					return (
						<Badge
							pill
							className="experience-badge mr-2 mb-2"
							key={i}
						>
							{technology}
						</Badge>
					);
				});
				return (
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date={work.years}
						iconStyle={{
							background: "#AE944F",
							color: "#fff",
							textAlign: "center",
						}}
						key={i}
					>
						<a href={link} target="_blank">
							<div
								style={{
									textAlign: "left",
									marginBottom: "4px",
								}}
							>
								{mainTech}
							</div>
							<img
								style={{
									width: "100%",
									marginBottom: "10px",
								}}
								src={logo}
							/>
							<h3
								className="vertical-timeline-element-title"
								style={{ textAlign: "left" }}
							>
								{work.title}
							</h3>
							<h4
								className="vertical-timeline-element-subtitle"
								style={{ textAlign: "left" }}
							>
								{work.company}
							</h4>
							<div
								style={{
									textAlign: "left",
									marginTop: "15px",
								}}
							>
								{tech}
							</div>
						</a>
					</VerticalTimelineElement>
				);
			});
		}

		return (
			<section id="resume" className="pb-5">
				<div className="col-md-12 mx-auto">
					<div className="col-md-12">
						<h1
							className="section-title"
							style={{ color: "black" }}
						>
							<span
								className="text-black"
								style={{ textAlign: "center" }}
							>
								{sectionName}
							</span>
						</h1>
					</div>
				</div>
				<div className="col-md-8 mx-auto">
					<VerticalTimeline>
						{work}
						<VerticalTimelineElement
							iconStyle={{
								background: "#AE944F",
								color: "#fff",
								textAlign: "center",
							}}
							icon={
								<i className="fas fa-hourglass-start mx-auto experience-icon"></i>
							}
						/>
					</VerticalTimeline>
				</div>
			</section>
		);
	}
}

export default Experience;