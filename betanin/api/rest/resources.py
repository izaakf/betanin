from betanin.api.models.torrent import Torrent
from betanin.api.rest import response_models
from betanin.api.rest.base import BaseResource
from betanin.api.rest.namespaces import torrents_ns


@torrents_ns.route('/')
class TorrentsResource(BaseResource):
    @staticmethod
    @torrents_ns.marshal_list_with(response_models.torrent)
    def get():
        return Torrent.query.all()


@torrents_ns.route('/<string:torrent_id>/console')
class LinesResource(BaseResource):
    @staticmethod
    @torrents_ns.marshal_list_with(response_models.line)
    def get(torrent_id):
        matches = Torrent.query.filter_by(id=torrent_id)
        return matches.first_or_404().lines
