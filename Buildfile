# ===========================================================================
# Project:   ImageSearch
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore
proxy '/ajax/services/search/images', :to =>'ajax.googleapis.com'