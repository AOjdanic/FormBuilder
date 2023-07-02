import { useContext } from "react";
import { createPortal } from "react-dom";
import FormContext from "../context/form-context";

function ModalElement() {
  const { setShowModal } = useContext(FormContext);
  const Modal = () => {
    return (
      <>
        <div
          onClick={(e) => {
            e.stopPropagation();
            return setShowModal(false);
          }}
          className="fixed left-0 top-0 z-10 h-screen w-full bg-slate-900/70"
        ></div>
        <div className="absolute left-1/2 top-1/2 z-50 flex h-[800px] w-screen -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-scroll rounded-md bg-slate-200 p-8 text-2xl font-semibold text-red-900 opacity-100 md:w-1/2 ">
          <h2 className="text-3xl font-bold underline">How to use this app</h2>

          <p>
            Basically, this form renders each form element by going through an
            array of objects, where each object represents one form element. The
            structure of the objects looks like this:
          </p>

          <img
            className="mx-auto h-[400px] w-[400px]"
            src="src\assets\formElementObj.png"
            alt="object structure"
          />

          <p>
            The value of &quot;type&quot; defines which properties you need to
            define and which you don&apos;t. For every element, id is always
            neccessary. In form builder on the left side, the &quot;title&quot;
            field is equivalent to &quot;label&quot; property in the element
            object.
          </p>

          <p>
            When building select, textboxes or radios, the &quot;radios&quot;
            fields represent different values of those elements. In that case,
            &quot;Name&quot; field is &quot;name&quot; attribute which all
            radios/textboxes need to share{" "}
          </p>
          <br />
          <p>
            My suggestion is to use form builder on left to see which properties
            you need to define for each element, and also to see which of these
            properties are required to be defined.
          </p>

          <h3 className="text-2xl font-bold underline">
            Creating form elements through string
          </h3>

          <p>
            Define each property and its value, separated by a colon (:).
            Properties should be separated by commas (,). Once you are done
            defining one of the elements, if you want to define more, separate
            each element with a full stop (.). If you want to make an element
            required, write &quot;required:true&quot;
            <br />
            <strong>
              Do not put empty spaces between commas and full stops.
            </strong>
          </p>

          <p>Example:</p>
          <p>
            The string:
            <br />
            <p>
              type:text,id:name,label:Name,placeholder:input name
              here,required:true.type:text,id:email,label:Email,placeholder:input
              email here,required:true
            </p>
            <br />
            creates these objects:
          </p>

          <img
            className="mx-auto h-[400px] w-[400px]"
            src="src\assets\objectsFromString.png"
            alt="objects made from parsing"
          />

          <p>These objects then get rendered in form elements:</p>
          <img
            className="mx-auto h-[400px] w-[400px]"
            src="src\assets\formElements.png"
            alt="rendered form elements"
          />

          <h3 className="text-2xl font-bold underline">
            Creating elements through JSON
          </h3>
          <p>
            The center textarea always shows the array of objects that is being
            rendered in form. Use it to change order of elements, edit or remove
            them. You can also add elements through it, but you need to follow
            the JSON structure in that field.{" "}
          </p>

          <p>Two previously rendered elements create this string:</p>

          <img
            className="mx-auto h-[400px] w-[400px]"
            src="src\assets\elementsInJson.png"
            alt="JSON form of form elements"
          />
          <strong>
            The JSON form must always have opening and closing square brackets
            to work properly.
          </strong>

          <p>Hope you like this app. Enjoy :)</p>
        </div>
      </>
    );
  };

  return <>{createPortal(<Modal />, document.getElementById("overlays"))}</>;
}

export default ModalElement;
