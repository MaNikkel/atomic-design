import {useSelector} from "react-redux";
import {UserRepo} from "../../molecules/UserRepo";
import {LoadingSpinner} from "../../atoms/Loading";
import {LoadingContainer} from "./styles";

export const UserReposList = () => {
    const { repos, loading } = useSelector(state => state.repos)

    if (loading) {
        return <LoadingContainer><LoadingSpinner size={40}/></LoadingContainer>
    }

    return (
        <>
            {repos.map((repo, index) => (
                <UserRepo index={index + 1} full_name={repo.full_name} key={repo.id} html_url={repo.html_url}/>
            ))}
        </>
    )

}