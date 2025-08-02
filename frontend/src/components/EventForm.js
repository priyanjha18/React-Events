import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { getAuthToken } from "../util/auth";

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }
  const data = useActionData();

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && <> <p>{data.message}</p><ul>{Object.values(data.errors).map((error)=><li key={error}>{error}</li>)}</ul></>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
export async function Action({request,params}){
  const data=await request.formData();
  const eventData={
      title:data.get("title"),
      image:data.get("image"),
      date:data.get("date"),
      description:data.get("description")
  }
  const token=getAuthToken()
  const method=request.method
  let url="http://localhost:8080/events"
  if (method==="PATCH"){
    const id=params.eventId
    url=`http://localhost:8080/events/${id}`
  }
  const response=await fetch(url,{
      method:method,
      headers:{
          'Content-Type':"application/json",
          "Authorization":"Bearer "+token
      },
      body:JSON.stringify(eventData)
      

  })
  console.log(eventData)
  if(response.status===422){
      return response
  }
  if(!response.ok){
      throw new Response(JSON.stringify({message:"Error failed to send data"},{status:500}))
  }
  return redirect("/events")
}