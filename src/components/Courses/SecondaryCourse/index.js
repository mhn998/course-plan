import SecondaryCard from "../../UI/Cards/SecondaryCard";
import {
  SecondaryCourseUpperWrapper,
  SecondaryCardTitleWrapper,
  SecondaryCourseLogo,
  SecondaryCourseName,
  SecondaryCourseId,
  SecondryCourseDurationWrapper,
  SecondaryCourseHours,
  SecondaryCourseDays,
  FullCourseName,
  SecondaryCourseFullName,
} from "./secondary-course.style";

const SecondaryCourse = ({ course }) => {
  const { name, image, id, hours, days, fullName } = course;

  return (
    <SecondaryCard>
      <SecondaryCourseUpperWrapper>
        <SecondaryCardTitleWrapper>
          <SecondaryCourseLogo src={image} alt="secondary course logo" />
          <div>
            <SecondaryCourseName>{name}</SecondaryCourseName>
            <SecondaryCourseId> {id}</SecondaryCourseId>
          </div>
        </SecondaryCardTitleWrapper>
        <SecondryCourseDurationWrapper>
          <SecondaryCourseHours>{hours} Hours</SecondaryCourseHours>
          <SecondaryCourseDays>({days} Days)</SecondaryCourseDays>
        </SecondryCourseDurationWrapper>
      </SecondaryCourseUpperWrapper>
      <FullCourseName>Full course name</FullCourseName>
      <SecondaryCourseFullName>{fullName}</SecondaryCourseFullName>
    </SecondaryCard>
  );
};

export default SecondaryCourse;
