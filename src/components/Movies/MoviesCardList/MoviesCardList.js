import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <seciton className="movies-card-list">
      <seciton className="movies-card-list__items">
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 17м"
          url="https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/5c/4c/97/5c4c974d0c47e0866ae8af7e34ee1d47.jpg"
          saved="true"
        />
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 17м"
          url="https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/5c/4c/97/5c4c974d0c47e0866ae8af7e34ee1d47.jpg"
          saved="false"
        />
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 17м"
          url="https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/5c/4c/97/5c4c974d0c47e0866ae8af7e34ee1d47.jpg"
          saved="false"
        />
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 17м"
          url="https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/5c/4c/97/5c4c974d0c47e0866ae8af7e34ee1d47.jpg"
          saved="false"
        />
        <MoviesCard
          title="33 слова о дизайне"
          time="1ч 17м"
          url="https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/5c/4c/97/5c4c974d0c47e0866ae8af7e34ee1d47.jpg"
          saved="false"
        />
      </seciton>
      <seciton className="movies-card-list__actions">
        <button type="button" className="movies-card-list__more">
          Ещё
        </button>
      </seciton>
    </seciton>
  )
}

export default MoviesCardList;
