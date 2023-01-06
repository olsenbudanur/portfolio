import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import suseats from "../assets/suseats.jpg";
import memento from "../assets/memento.jpg";
import waitfree from "../assets/waitfree.jpg";
import tutana from "../assets/tutana.jpg";
import hack from "../assets/hackdavidson.jpg";
import immi from "../assets/immi.jpg";
import block from "../assets/block.jpg";
import code from "../assets/code.jpg";
import smart from "../assets/smart.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deps: {},
			detailsModalShow: false,
		};
	}

	render() {
		let images = [
			suseats,
			memento,
			waitfree,
			tutana,
			hack,
			immi,
			block,
			code,
			smart,
		];
		let detailsModalShow = (data) => {
			this.setState({ detailsModalShow: true, deps: data });
		};

		let detailsModalClose = () =>
			this.setState({ detailsModalShow: false });
		if (this.props.resumeProjects && this.props.resumeBasicInfo) {
			var sectionName =
				this.props.resumeBasicInfo.section_name.projects;
			var projects = this.props.resumeProjects.map(function (
				projects
			) {
				return (
					<div
						className="col-sm-12 col-md-6 col-lg-4"
						key={projects.title}
						style={{ cursor: "pointer" }}
					>
						<span className="portfolio-item d-block">
							<div
								className="foto"
								onClick={() =>
									detailsModalShow(projects)
								}
							>
								<div>
									<img
										src={
											images[
												projects
													.images[0]
											]
										}
										alt="projectImages"
										height="230"
										style={{
											marginBottom: 0,
											paddingBottom: 0,
											position: "relative",
										}}
									/>
									<br />
									<p className="project-title-settings mt-3">
										{projects.title}
									</p>
								</div>
							</div>
						</span>
					</div>
				);
			});
		}

		return (
			<section id="portfolio">
				<div className="col-md-12">
					<h1
						className="section-title"
						style={{ color: "black" }}
					>
						<span>{sectionName}</span>
					</h1>
					<div className="col-md-12 mx-auto">
						<div className="row mx-auto">
							{projects}
						</div>
					</div>
					<ProjectDetailsModal
						show={this.state.detailsModalShow}
						onHide={detailsModalClose}
						data={this.state.deps}
					/>
				</div>
			</section>
		);
	}
}

export default Projects;
