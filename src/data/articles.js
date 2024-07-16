import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Dependency Injection in Spring",
		description:
			"Dependency Injection is a helpful tool for developers to make efficient applications and is the backbone of the Spring framework.",
		keywords: [
			"Dependency Injection in Spring",
			"Iverson",
			"Iverson M",
			"Iverson Mejia",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<b> Definition </b> <br />
						Dependency Injection allows for another way of creating
						and using objects in java, and is the preferred method
						when dealing with Spring projects. Dependency injection
						allows for the developer to specify what classes they
						might need as objects throughout their program (In
						spring this is derived with the @Bean or @Component).
						When the program starts, Spring would create the beans
						and components specified throughout our program and save
						it in a container. Once a section of code is run asking
						for an object spring would look through the container
						until it finds an object that matches.
						<br />
						<b> Benefits </b> <br />
						One benefit of Dependency Injection is code readability
						is improved and managing objects is going to easier
						since all of the objects are going to be created in one
						class as opposed to all over the project, which is
						perfect when dealing with potential future changes in
						code. Dependency injection also allows for easier unit
						testing since we can set default values for certain
						classes that might be necessary for the class that we
						are testing. Ex. Making some default values for an
						object called database since we can't connect to the
						database that we are using, however, it's still needed
						in the classes that we need to unit test. An extermely
						crucial part of Dependency Injection has the added
						benefit of being better memory management in our
						programs since all of the necessary objects are being
						created at the beginning of the runtime eliminating the
						need for having to allocate additional memory.
						<br />
						<b> Conclusion </b> <br />
						Whenever possible try to make your Java Spring
						applications with Dependency Injection in mind since it
						not only improves our application performance, but it
						also helps with the unit testing. Now that you learned a
						little bit more about Dependency Injection try it out
						yourself.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
