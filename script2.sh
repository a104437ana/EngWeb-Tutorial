set -x
cd "$1" || exit
sudo docker start a828ec4bc4de
sudo docker cp dataset_corrigido.json mongoEW:/tmp
sudo docker exec -it mongoEW sh