import {useSelector} from "react-redux";
import {UserRepo} from "../../molecules/UserRepo";

export const UserReposList = () => {
    const { repos } = useSelector(state => state.repos)

    return (
        <>
            {repos.map((repo, index) => (
                <UserRepo index={index + 1} full_name={repo.full_name} key={repo.id} html_url={repo.html_url}/>
            ))}
        </>
    )

}