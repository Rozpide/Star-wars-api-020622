import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const SWCard = (props) => {
    const { actions } = useContext(Context);
    return (
        <>
            <Card className="me-4 ms-3 my-3 px-0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/400x200.png" />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    {props.type === "characters" ?
                        <>
                            <p className="card-text mb-0">Gender: {props.data.gender}</p>
                            <p className="card-text mb-0">Hair Color: {props.data.hair_color}</p>
                            <p className="card-text">Eye Color: {props.data.eye_color}</p>

                            <div className="row">
                                <div className="col-12 col-sm-6 pe-3">
                                    <LinkContainer to={`/character/${props.position}`}>
                                        <Button variant="outline-primary">Learn more!</Button>
                                    </LinkContainer>
                                </div>
                                <div className="col-12 col-sm-6 pe-3 d-flex flex-row-reverse">
                                    <Button variant="outline-warning" onClick={()=>actions.addFav("characters", props.position)}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Button>
                                </div>
                            </div>


                        </> : props.type === "planets" ?
                            <>
                                <p className="card-text mb-0">Population: {props.data.population}</p>
                                <p className="card-text">Terrain: {props.data.terrain}</p>

                                <div className="row">
                                    <div className="col-12 col-sm-6 pe-3">
                                        <LinkContainer to={`/planets/${props.position}`}>
                                            <Button variant="outline-primary">Learn more!</Button>
                                        </LinkContainer>
                                    </div>
                                    <div className="col-12 col-sm-6 pe-3 d-flex flex-row-reverse">
                                        <Button variant="outline-warning" onClick={()=>actions.addFav("planets", props.position)}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Button>
                                    </div>
                                </div>
                            </>:
                                <>
                                    <p className="card-text mb-0">Model: {props.data.model}</p>
                                    <p className="card-text">Cargo Capacity: {props.data.cargo_capacity}</p>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 pe-3">
                                            <LinkContainer to={`/vehicles/${props.position}`}>
                                                <Button variant="outline-primary">Learn more!</Button>
                                            </LinkContainer>
                                        </div>
                                        <div className="col-12 col-sm-6 pe-3 d-flex flex-row-reverse">
                                            <Button variant="outline-warning" onClick={()=>actions.addFav("vehicles", props.position)}>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </Button>
                                        </div>
                                    </div>
                                </>
                    }
                </Card.Body>
            </Card>
        </>
    );
}
export default SWCard;