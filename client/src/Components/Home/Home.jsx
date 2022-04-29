import React from "react";
import "./Home.css";
const Home = () => (
  <div>
    <div>
      <div className="info-container">
        <h1>About the Application</h1>
        <p>
          Eye ball movement is the most common way for paralysis patients to
          communicate. Eye movement can be used by the paralysis patients and
          armless persons to perform simple tasks such as Human Machine
          Interfacing and EOG signals are also vital signs in some of the
          neurological disorders and it can be tracked by acquiring
          electrooculogram (EOG) .
        </p>
      </div>
      {/* The App Section */}
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Need</b>
            </h1>
            <h1 className="large-font" style={{ color: "rgb(25,118,210)" }}>
              <b>Why should i use it?</b>
            </h1>
            <p>
              EOG is an obtrusive, inexpensive and non-invasive means of
              recording eye ball movements. The source for EOG signal is
              cornea-retinal potential (CRP) and is generated due to the
              movements of eye balls within the conductive environment of the
              skull. While recording the EOG signal, it will be contaminated by
              electromyography (EMG) signal. As the EOG is a non stationary
              signal like other biomedical signals ECG, EEG & PPG. Generally
              they are suffers from different interferences like power line
              interference and with other biomedical signals. The concept of
              decomposing the signal into different IMF's will analyze the EOG
              signals to study different types of eye movements (SEMs & REMs).
              In this paper, the well established method is utilized for
              denoising and detection of eye blinks from ECG signals.
            </p>
          </div>
          <div className="column-33">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570381039627-fb3348f2a719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
              width={335}
              height={471}
            />
          </div>
        </div>
      </div>
      {/* Clarity Section */}
      <div className="container">
        <div className="row">
          <div className="column-33">
            <img
              src="https://i.ibb.co/vc2JcpY/bioamp-exg-pill-eog-electrode-placement.png"
              alt="App"
              width={335}
              height={471}
            />
          </div>
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Why</b>
            </h1>
            <h1 className="large-font" style={{ color: "rgb(25,118,210)" }}>
              <b>Why i should use it?</b>
            </h1>
            <p>
              <span style={{ fontSize: "24px" }}>
                A revolution in resolution.
              </span>
              An EOG records eye movement by detecting a voltage difference
              between the cornea and retina. As the eye moves, the vector of
              this electric field changes with respect to recording electrodes
              placed in the skin at fixed points. These bioelectrical signals
              are typically very small in amplitude (µV) and an amplifier is
              required to accurately record the EO
            </p>
          </div>
        </div>
      </div>
      {/* The App Section */}
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Who</b>
            </h1>
            <h1 className="large-font" style={{ color: "rgb(25,118,210)" }}>
              <b>Who should use it?</b>
            </h1>

            <br />
            <p>
              In the 1920's, it was discovered that by placing electrodes on the
              skin in the region of the eyes, one could record electrical
              activity which changed in synchrony with movements of the eye in
              the head. It was initially believed that these potentials
              reflected the action potentials in the muscles that are
              responsible for moving the eyes in the orbi
            </p>
            <br />
            <p>
              his potential difference sets up an electrical field in the
              tissues surrounding the eye. As the eye rotates, the field vector
              rotates correspondingly. Therefore, eye movements can be detected
              by placing electrodes on the skin in the area of the head around
              the eyes. Vertical movements of the eyes are best measured by
              placing the electrodes on the lids, while horizontal eye movements
              can be best measured by placing the electrodes on the external
              canthi (the bone on the side of the eye).
            </p>
          </div>
          <div className="column-33">
            <img
              alt=""
              src="https://i.ibb.co/yF2rs3L/eyepotent.jpg"
              width={335}
              height={471}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
