package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "team")
public class Team {
    @Id
    private Long id;
    private String name;
    private String coachName;
    private LocalDateTime registerAt;
    private Boolean paid;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    private Tourments tour;

    @ManyToOne
    @JoinColumn(name = "league_table_id")
    private LeagueTable leagueTable;

    @ManyToMany(mappedBy = "teams")
    private List<Match> matches;
}
