import React from "react";

function Chatbox() {
  return (
    <div className="App">
      <section id="demo">
        <div class="vertical-align">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3 col-xs-offset-0">
                <div class="card no-border">
                  <div id="chat" class="conv-form-wrapper">
                  <form action="" method="GET" class="hidden">
										{/* <!-- Intro --> */}
										<select name="intro" data-conv-question="Hello! Welcome to Jeep! I'm Jane, here to help you make your car purchase! Do you need any help?">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>

										{/* <!-- Fork Intro --> */}
										<div data-conv-fork="intro">
											{/* <!-- Yes, Proceed --> */}
											<div data-conv-case="yes">
												<input type="text" data-conv-question="Great! Lets get started!" data-no-answer="true"/>
											</div>
											{/* <!-- No, Reset page --> */}
											<div data-conv-case="no">
												<select name="goodby" data-conv-question="Alright, are you sure?">
													<option value="reset" data-callback="reset">Yes</option>
												</select>
											</div>
										</div>
										{/* <!-- Yes, continue, ask name --> */}
										<input type="text" name="name" data-conv-question="Alright! First, tell me your full name, please.|Okay! Please, tell me your name first." data-pattern="^[a-zA-Z]"/>
										<input type="text" data-conv-question="Hello, {name}! It's a pleasure to meet you." data-no-answer="true"/>
										{/* <!-- Consent to collect info --> */}
										<select name="info-consent" data-conv-question="Im going to ask you a few questions to help me personalize your shopping experience! Is this ok?">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
										{/* <!-- Consent Fork --> */}
										<div data-conv-fork="info-consent">
											{/* <!-- Yes, Proceed --> */}
											<div data-conv-case="yes">
												<input type="text" data-conv-question="Thank you!" data-no-answer="true"/>
											</div>
											{/* <!-- No, Reset page --> */}
											<div data-conv-case="no">
												<select name="goodby2" data-conv-question="Thats ok, would you like me to reccomend a car anyway?">
													<option value="yes">Yes</option>
													<option value="no">No</option>
												</select>
												{/* <!-- New for, push a car --> */}
												<div data-conv-fork="goodby2">
													<div data-conv-case="yes">
														<select name="popular-choices" data-conv-question="Perfect, these cars are quite popular!">
																<option value="yeetcar1" data-callback="yeetcar1">Brz(Coupe)</option>
																<option value="yeetcar2" data-callback="yeetcar2">Ascent(Full size SUV)</option>
																<option value="yeetcar3" data-callback="yeetcar3">Impreza(Sedan)</option>
																<option value="yeetcar4" data-callback="yeetcar4">Forester(Compact SUV)</option>
														</select>
													</div>
													<div data-conv-case="no">
														<select name="goodby3" data-conv-question="See you later!">
															<option value="reset" data-callback="reset">Goodbye</option>
														</select>
													</div>
												</div>
											</div>
										</div>

										{/* <!-- Yes, Continue, Ask the Questions --> */}
										<input type="text" name="age" data-conv-question="How old are you?" data-pattern="^[1-9]"/>
										<input type="text" name="kilom" data-conv-question="How far do you travel on your daily commute?" data-pattern="^[1-9]"/>
										<input type="text" name="num-people" data-conv-question="How many family members including yourself are in your household?" data-pattern="^[1-9]"/>
										<input type="text" data-conv-question="Compiling your data." data-no-answer="true"/>
										<input type="text" data-conv-question="Thank you!" data-no-answer="true"/>
										{/* <!-- Insert API thingy --> */}
										
										{/* <!-----------------------> */}

										{/* <!-- A Choice made from ML model and other data --> */}
										<select name="ML-Choice" data-conv-question="I would reccomend this car!">
											<option value="MLChoice" data-callback="MLChoice">Placeholder</option>
										</select>



										{/* <!-- <input type="text" data-conv-question="This plugin supports multi-select too. Let's see an example." data-no-answer="true">
										<select name="multi[]" data-conv-question="What kind of music do you like?" multiple>
											<option value="Rock">Rock</option>
											<option value="Pop">Pop</option>
											<option value="Country">Country</option>
											<option value="Classic">Classic</option>
											<option value="Yeet">Yeet</option>
										</select>
										<select name="programmer" data-callback="storeState" data-conv-question="So, are you a programmer? (this question will fork the conversation based on your answer)">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
										<div data-conv-fork="programmer">
											<div data-conv-case="yes">
												<input type="text" data-conv-question="A fellow programmer! Cool." data-no-answer="true">
											</div>
											<div data-conv-case="no">
												<select name="thought" data-conv-question="Have you ever thought about learning? Programming is fun!">
													<option value="yes">Yes</option>
													<option value="no">No..</option>
												</select>
											</div>
										</div>
										<input type="text" data-conv-question="convForm also supports regex patterns. Look:" data-no-answer="true"/>
										<input data-conv-question="Type in your e-mail" data-pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" id="email" type="email" name="email" required placeholder="What's your e-mail?"/>
										<input data-conv-question="Now tell me a secret (like a password)" type="password" data-minlength="6" id="senha" name="password" required placeholder="password"/>
										<select data-conv-question="Selects also support callback functions. For example, try one of these:">
												<option value="google" data-callback="google">Google</option>
												<option value="bing" data-callback="bing">Bing</option>
										</select>
										<select name="callbackTest" data-conv-question="You can do some cool things with callback functions. Want to rollback to the 'programmer' question before?">
											<option value="yes" data-callback="rollback">Yes</option>
											<option value="no" data-callback="restore">No</option>
										</select>
										<select data-conv-question="This is it! If you like me, consider donating! If you need support, contact me. When the form gets to the end, the plugin submits it normally, like you had filled it." id="">
											<option value="">Awesome!</option>
										</select> --> */}
									</form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default Chatbox;
